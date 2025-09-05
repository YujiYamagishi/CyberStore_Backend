import { Review } from "../entity/review";
import { PaginatedReviews } from "../entity/review-paginated";

export interface ReviewGateway{
    listRatingByProductId(product_id: number): Promise<number[]>;
    list(): Promise<Review[]>;
    listByProductId(productId: number, page: number, pageSize:number):Promise<PaginatedReviews>;

}