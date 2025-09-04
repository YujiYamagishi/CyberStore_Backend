import { SmartphoneSpecDto } from "../../../usecases/product/list-by-id.usecase";
import { BrandTotal } from "../../brand/entity/brand-total.entity";
import { Product } from "../entity/product";

export type ListProductByCategoryOutputDto = {
    data: Product[];
    metadata: {
        total_pages: number;
        actual_page: number;
        total_items: number;
        per_page: number;
    };
};

export interface ProductGateway {
    list(): Promise<Product[]>;
    listByTag(tag: string): Promise<Product[]>;
    listById(id: number): Promise<{ product: Product | undefined, smartphoneSpec?: SmartphoneSpecDto | null }>;
    listByBrand(brand: string): Promise<Product[]>;
    getBrandTotals(): Promise<BrandTotal[]>;
    listByCategory(
        input: 
        { category: string; 
            page: number; 
            limit: number; 
            sort: string; 
            order: string; 
            brands?: string[] | undefined }): Promise<ListProductByCategoryOutputDto>;
}