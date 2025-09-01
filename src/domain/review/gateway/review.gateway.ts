import { Review } from "../entity/review";
import { PaginatedReviews } from "../entity/review-paginated";

export interface ReviewGateway{
    list(): Promise<Review[]>;
    listByProductId(productId: number, page: number, pageSize:number):Promise<PaginatedReviews>;

}