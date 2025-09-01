import { PrismaClient } from "@prisma/client";
import { PaginatedReviews, ReviewData } from "../../../domain/review/entity/review-paginated";
import { ReviewGateway } from "../../../domain/review/gateway/review.gateway";
import { Review } from "../../../domain/review/entity/review";

export class ReviewRepositoryPrisma implements ReviewGateway {
    private constructor(private readonly prismaClient: PrismaClient) { }

    public static create(prismaClient: PrismaClient) {
        return new ReviewRepositoryPrisma(prismaClient);
    }

    public async list(): Promise<Review[]> {
        return [];
    }

    public async listRatingByProductId(productId: number): Promise<number[]> {
        const ratings = await this.prismaClient.review.findMany({
            where: { id_product: productId },
            select: { rating: true }
        });
        return ratings.map(r => r.rating);
    }

    public async listByProductId(productId: number, page: number, pageSize: number): Promise<PaginatedReviews> {
        const skip = (page - 1) * pageSize;
        const take = pageSize;

        const totalReviews = await this.prismaClient.review.count({
            where: {
                id_product: productId,
            }
        });

        const reviewsFromDb = await this.prismaClient.review.findMany({
            where: {
                id_product: productId,
            },
            skip: skip,
            take: take,
            orderBy: {
                created_at: 'desc',
            }
        });

        const data: ReviewData[] = reviewsFromDb.map(review => ({
            id: review.id,
            message: review.message,
            rating: review.rating,
            created_at: review.created_at,
            name_user: review.name_user,
            url_image_user: review.url_image_user,
        }));

        const totalPages = Math.ceil(totalReviews / pageSize);
        const hasNextPage = page < totalPages;

        return {
            data: data,
            metadata: {
                current_page: page,
                next_page: hasNextPage,
                size_page: data.length,
            }
        };
    }
}