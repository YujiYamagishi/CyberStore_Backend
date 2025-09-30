import { Response } from "express"; 
import { Request, Route, HttpMethod } from "../route"; 
import { prisma } from "../../../../../../prisma/client";

export class CreateShoppingCartRoute implements Route {
  getPath(): string {
    return "/api/shopping_carts";
  }
  getMethod(): HttpMethod {
    return HttpMethod.POST;
  }
  getHandler() {
    return async (req: Request, res: Response) => {
      try {
        const userId = req.auth?.userId;

        if (!userId) {
          return res.status(401).json({ message: "User not authenticated." });
        }
        
        const { products } = req.body;
        if (!products || !Array.isArray(products) || products.length === 0) {
            return res.status(400).json({ message: "The product list is mandatory." });
        }
        
        const newCart = await prisma.shoppingCart.create({
            data: {
                user_id: userId, 
                status: "ativo",
                items: {
                    create: products.map((p: { product_id: number; quantity: number }) => ({
                        quantity: p.quantity,
                        product: { connect: { id: p.product_id } },
                    })),
                },
            },
            include: { items: { include: { product: true } } },
        });

        return res.status(201).json(newCart);

      } catch (err) {
        console.error("Error creating cart:", err);
        return res.status(500).json({ message: "Internal error creating cart" });
      }
    };
  }
}