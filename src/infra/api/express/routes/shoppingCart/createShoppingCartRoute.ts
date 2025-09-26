// src/infra/api/express/routes/shoppingCart/createShoppingCartRoute.ts

import { Response } from "express"; // ✅ Pega `Response` diretamente do express
import { Request, Route, HttpMethod } from "../route"; // ✅ Pega nossos tipos customizados do route
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
          return res.status(401).json({ message: "Usuário não autenticado." });
        }
        
        const { products } = req.body;
        if (!products || !Array.isArray(products) || products.length === 0) {
            return res.status(400).json({ message: "A lista de produtos é obrigatória." });
        }
        
        const newCart = await prisma.shoppingCart.create({
            data: {
                user_id: parseInt(userId),
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
        console.error("Erro ao criar o carrinho:", err);
        return res.status(500).json({ message: "Erro interno ao criar o carrinho" });
      }
    };
  }
}