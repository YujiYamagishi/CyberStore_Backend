import type { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { Category } from "../../../domain/category/entity/category";
import type { CategoryGateway } from "../../../domain/category/gateway/category.gateway";

export class CategoryRepositoryPrisma implements CategoryGateway {
    private constructor(private readonly prismaClient: PrismaClient) {}

    public static create(prismaClient: PrismaClient) {
        return new CategoryRepositoryPrisma(prismaClient);
    }

    public async list(): Promise<Category[]> {
        const categories = await this.prismaClient.category.findMany();

        return categories.map((c) =>
            Category.with({
                id: c.id,
                name: c.name,
                description: c.description,
                created_at: c.created_at,
                updated_at: c.update_at,
            })
        );
    }
}