import { SmartphoneSpecDto } from "../../../usecases/product/listById.usecase";
import { Product } from "../entity/product";

export interface ProductGateway{
    list(): Promise<Product[]>;
    listByTag(tag: string): Promise<Product[]>;
    listById(id: number): Promise<{ product: Product | undefined, smartphoneSpec?: SmartphoneSpecDto | null }>;
}