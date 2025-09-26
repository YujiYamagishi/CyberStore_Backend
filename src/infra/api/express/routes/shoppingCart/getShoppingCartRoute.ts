// src/infra/api/express/routes/shoppingCart/getShoppingCartRoute.ts
import type { Request, Response } from "express";
import { Route, HttpMethod } from "../route";
import { prisma } from "../../../../../../prisma/client";

export class GetShoppingCartRoute implements Route {
  getPath(): string {
    return "/api/shopping-carts/:userId";
  }

  getMethod() {
    return HttpMethod.GET;
  }

  getHandler() {
    return async (req: Request, res: Response) => {
      try {
        const { userId } = req.params;

        const cart = await prisma.shoppingCart.findFirst({
          where: { user_id: Number(userId), status: "ativo" },
          include: {
            items: {
              include: {
                product: true,
              },
            },
          },
        });

        if (!cart) {
          return res.status(404).json({
            message: "Nenhum carrinho ativo encontrado para este usuário",
            status_code: 404,
          });
        }

        return res.json({
          message: "Carrinho encontrado",
          status_code: 200,
          data: cart,
        });
      } catch (err) {
        console.error(err);
        return res.status(500).json({
          message: "Erro ao buscar carrinho",
          status_code: 500,
        });
      }
    };
  }
}
