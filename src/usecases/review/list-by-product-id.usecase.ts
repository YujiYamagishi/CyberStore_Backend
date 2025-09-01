import { PaginatedReviews } from "../../domain/review/entity/review-paginated";
import { ReviewGateway } from "../../domain/review/gateway/review.gateway";

export type ListReviewsByProductIdUseCaseInputDto = {
    productId: number;
    page: number;
    pageSize: number;
}

export class ListReviewsByProductIdUseCase {
    private constructor(private readonly reviewGateway: ReviewGateway) {}

    public static create(reviewGateway: ReviewGateway) {
        return new ListReviewsByProductIdUseCase(reviewGateway);
    }

    public async execute(input: ListReviewsByProductIdUseCaseInputDto): Promise<PaginatedReviews> {
        const { productId, page, pageSize } = input;

        const paginatedReviews = await this.reviewGateway.listByProductId(productId, page, pageSize);

        return paginatedReviews;
    }
}