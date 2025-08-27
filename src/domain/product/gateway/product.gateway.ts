import { Product } from "../entity/product";

export interface ProductGateway{
    list(): Promise<Product[]>;

}