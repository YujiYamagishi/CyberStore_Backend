import { ColorProductGateway } from "../../../domain/color-product/gateway/color-product.gateway";
import { ColorProduct } from "../../../domain/color-product/entity/color-product";
import { PrismaClient } from "@prisma/client";

export class ColorProductRepositoryPrisma implements ColorProductGateway {
    private constructor(private readonly prismaClient: PrismaClient) { }

    public static create(prismaClient: PrismaClient) {
        return new ColorProductRepositoryPrisma(prismaClient);
    }

    public async listByProductId(id_product: number): Promise<ColorProduct[]> {
        const colors = await this.prismaClient.colorsProduct.findMany({
            where: { id_product: id_product }
        });
        const colorList = colors.map((c) => {
            const color = ColorProduct.with({
                id_product: c.id_product,
                hex_code: c.hex_code,
                name: c.name,
                created_at: c.created_at
            })
            return color;
        })
        return colorList;
    }

}