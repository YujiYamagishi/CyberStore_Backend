import { Review } from "../entity/review";

export interface ReviewGateway{
    list(): Promise<Review[]>;

}