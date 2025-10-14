import { Response, Request } from "express";
import { Route, HttpMethod } from "../route";
import { PrismaClient } from "@prisma/client";
import { ProductRepositoryPrisma } from "../../../../repositories/product/product.repository.prisma"; 

export class ListAllProductsRoute implements Route {
    getPath(): string {
        
        return "/api/products";
    }

    getMethod(): HttpMethod {
        return HttpMethod.GET;
    }

    getHandler() {
        return async (req: Request, res: Response) => {
            const prisma = new PrismaClient();
            const productRepository = ProductRepositoryPrisma.create(prisma);

            try {
                const products = await productRepository.list();
                return res.status(200).json(products);
            } catch (err) {
                console.error("ERRO DENTRO DA ROTA GET /api/products:", err);
                return res.status(500).json({ message: "Internal error fetching products" });
            } finally {
                await prisma.$disconnect();
            }
        };
    }
}