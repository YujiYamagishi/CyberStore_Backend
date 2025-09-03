import { Product } from "../../domain/product/entity/product"
import { ProductGateway } from "../../domain/product/gateway/product.gateway"
import { Usecase } from "../usecase"

export type ListProductByCategoryInputDto = {
    category: string
    page: number
    limit: number
    sort: string
    order: string
    brands?: string[]
}

export type ListProductByCategoryOutputDto = {
    products: {
        id: number;
        name: string;
        description: string;
        brand: string
        price: number;
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
}

export class ListProductByCategoryUseCase implements Usecase<ListProductByCategoryInputDto, ListProductByCategoryOutputDto> {

    private constructor(private readonly productGateway: ProductGateway) { }

    public static create(productGateway: ProductGateway) {
        return new ListProductByCategoryUseCase(productGateway);
    }

    public async execute(input: ListProductByCategoryInputDto): Promise<ListProductByCategoryOutputDto> {

        const result = await this.productGateway.listByCategory(input.category, input.page, input.limit, input.sort, input.order, input.brands);

        const output = this.presentOutput(result.data, result.metadata);

        return {
            ...output,
            metadata: result.metadata
        };
    }


    private presentOutput(products: Product[],
        metadata: { total_pages: number; actual_page: number; total_items: number; per_page: number }
    ): ListProductByCategoryOutputDto {

        const productsWithId = products.filter((p): p is Product & { id: number } =>
            p.id !== undefined
        );

        return {
            products: productsWithId.map((p) => ({
                id: p.id,
                name: p.name,
                description: p.description,
                brand: p.brand,
                price: p.price,
                stock: p.stock,
                url_image: p.url_image,
                id_category: p.id_category
            })),
            metadata
        };
    }
}