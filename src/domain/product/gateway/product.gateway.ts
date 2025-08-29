import { SmartphoneSpecDto } from "../../../usecases/product/listById.usecase";
import { BrandTotal } from "../../brand/entity/brand-total.entity";
import { Product } from "../entity/product";

export interface ProductGateway{
    list(): Promise<Product[]>;
    listByTag(tag: string): Promise<Product[]>;
    listById(id: number): Promise<{ product: Product | undefined, smartphoneSpec?: SmartphoneSpecDto | null }>;
    listByBrand(brand: string): Promise<Product[]>;
    getBrandTotals(): Promise<BrandTotal[]>;
}