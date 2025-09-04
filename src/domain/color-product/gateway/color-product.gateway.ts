import { ColorProduct } from "../entity/color-product";

export interface ColorProductGateway{
    listByProductId(product_id: number): Promise<ColorProduct[] | null>;

}

