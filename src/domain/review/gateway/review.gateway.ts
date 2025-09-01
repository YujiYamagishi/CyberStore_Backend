import { Review } from "../entity/review";

export interface ReviewGateway{
    listRatingByProductId(product_id: number): Promise<number[]>;
}