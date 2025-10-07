import { Response, Request } from "express"; 
import { Route, HttpMethod } from "../route"; 
import { prisma } from "../../../../../../prisma/client";

export class UpdateShoppingCartRoute implements Route {
  getPath(): string {
    return "/api/shopping_carts/:id";
  }
  getMethod(): HttpMethod {
    return HttpMethod.PUT;
  }
  getHandler() {
    return async (req: Request, res: Response) => {
      try {
        const userId = req.auth?.userId;
        const cartId = Number(req.params.id);
        const { products } = req.body;

        if (!userId) {
            return res.status(401).json({ message: "User not authenticated." });
        }

        const cartToUpdate = await prisma.shoppingCart.findUnique({ where: { id: cartId } });
        
        
        if (!cartToUpdate || cartToUpdate.user_id !== userId) {
            return res.status(404).json({ message: "Cart not found or does not belong to the user." });
        }
        
        await prisma.$transaction([
            prisma.itemShoppingCart.deleteMany({ where: { shopping_cart_id: cartId } }),
            prisma.itemShoppingCart.createMany({
                data: products.map((p: { product_id: number; quantity: number }) => ({
                    product_id: p.product_id,
                    quantity: p.quantity,
                    shopping_cart_id: cartId,
                })),
            })
        ]);
        
        const updatedCart = await prisma.shoppingCart.findUnique({
            where: { id: cartId },
            include: { items: { include: { product: true } } },
        });

        return res.status(200).json(updatedCart);

      } catch (err) {
        console.error("Error updating cart items:", err);
        return res.status(500).json({ message: "Internal error while updating cart" });
      }
    };
  }
}