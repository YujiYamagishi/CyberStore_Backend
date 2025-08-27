import { ColorProduct } from "../entity/color-product";

export interface ColorProductGateway{
    list(): Promise<ColorProduct[]>;

}

