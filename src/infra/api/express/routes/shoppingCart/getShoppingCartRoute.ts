import { Response } from "express";
import { Request, Route, HttpMethod } from "../route";
import { prisma } from "../../../../../../prisma/client";


export class GetShoppingCartRoute implements Route {
  getPath(): string {
    return "/shopping-cart/:userId";
  }

  getMethod(): HttpMethod {
    return HttpMethod.GET;
  }

  getHandler() {
    return async (req: Request, res: Response) => {
      try {
        const clerkUserId = req.auth?.userId;
        const requestedUserId = req.params.userId;

        if (!clerkUserId || clerkUserId !== requestedUserId) {
          return res.status(403).json({ message: "Acesso não autorizado." });
        }

        const activeCart = await prisma.shoppingCart.findFirst({
          where: {
            user_id: clerkUserId,
            status: "ativo"
          },
          include: {
            items: {
              include: {
                product: true,
              },
            },
          },
        });

        if (!activeCart) {
          return res.status(404).json({ message: "Nenhum carrinho ativo encontrado para este usuário." });
        }

        return res.status(200).json(activeCart);

      } catch (err) {
        console.error("Erro ao buscar o carrinho:", err);
        return res.status(500).json({ message: "Erro interno ao buscar o carrinho." });
      }
    };
  }
}