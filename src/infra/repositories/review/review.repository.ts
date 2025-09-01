import { PrismaClient, Review } from "@prisma/client"
import { ReviewGateway } from "../../../domain/review/gateway/review.gateway"

export class ReviewRepositoryPrisma implements ReviewGateway{
    private constructor(private readonly prismaClient: PrismaClient){}

    public static create(prismaClient: PrismaClient) {
        return new ReviewRepositoryPrisma(prismaClient);
    }

    public async listRatingByProductId(productId: number): Promise<number[]> {
        const ratings = await this.prismaClient.review.findMany({
            where: { id_product: productId },
            select: { rating: true }
        });
        return ratings.map(r => r.rating);
    }
}
    
    