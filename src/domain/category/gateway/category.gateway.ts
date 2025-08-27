import { Category } from "../entity/category";

export interface CategoryGateway{
    list(): Promise<Category[]>;

}

