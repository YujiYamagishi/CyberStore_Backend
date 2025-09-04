import { Product } from "../../domain/product/entity/product";
import { ProductGateway } from "../../domain/product/gateway/product.gateway";
import { Usecase } from "../usecase";

export type ListProductByCategoryInputDto = {
    category: string;
    page: number;
    limit: number;
    sort: string;
    order: string;
    brands?: string[];
};

export type ListProductByCategoryOutputDto = {
    products: {
        id: number;
        name: string;
        description: string;
        brand: string;
        price: number;
        original_price?: number | undefined;
        stock: number;
        url_image: string;
        id_category: number;
    }[],
    metadata: {
        total_pages: number;
        actual_page: number;
        total_items: number;
        per_page: number;
    }
};

export class ListProductByCategoryUseCase implements Usecase<ListProductByCategoryInputDto, ListProductByCategoryOutputDto> {

    private constructor(private readonly productGateway: ProductGateway) { }

    public static create(productGateway: ProductGateway) {
        return new ListProductByCategoryUseCase(productGateway);
    }

    public async execute(input: ListProductByCategoryInputDto): Promise<ListProductByCategoryOutputDto> {
        const result = await this.productGateway.listByCategory({
            category: input.category,
            page: input.page,
            limit: input.limit,
            sort: input.sort,
            order: input.order,
            brands: input.brands
        });

        return this.presentOutput(result.data, result.metadata);
    }

    private presentOutput(
        products: Product[],
        metadata: ListProductByCategoryOutputDto['metadata']
    ): ListProductByCategoryOutputDto {
        return {
            products: products.map((p) => {
                const hasDiscount = p.discounted_price !== null && p.discounted_price !== undefined && p.discounted_price > 0;

                return {
                    id: p.id!,
                    name: p.name,
                    description: p.description,
                    brand: p.brand,
                    price: hasDiscount ? p.discounted_price! : p.price,
                    original_price: hasDiscount ? p.price : undefined,
                    stock: p.stock,
                    url_image: p.url_image,
                    id_category: p.id_category
                };
            }),
            metadata
        };
    }
}