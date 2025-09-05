import { Product } from "../../domain/product/entity/product";
import { ProductGateway } from "../../domain/product/gateway/product.gateway";
import { Usecase } from "../usecase";

export type ListProductByTagInputDto = {
    tag: string;
}

export type ListProductByTagOutputDto = {
    products: {
        id: number,
        name: string,
        price: number,
        original_price?: number | undefined,
        tag: string,
        url_image: string
    }[];
}

export class ListProductByTagUseCase implements Usecase<ListProductByTagInputDto, ListProductByTagOutputDto> {
    private constructor(private readonly productGateway: ProductGateway) { }

    public static create(productGateway: ProductGateway) {
        return new ListProductByTagUseCase(productGateway);
    }

    public async execute(input: ListProductByTagInputDto): Promise<ListProductByTagOutputDto> {
        const aProducts = await this.productGateway.listByTag(input.tag);
        const output = this.presentOutput(aProducts);
        return output;
    }

    private presentOutput(products: Product[]): ListProductByTagOutputDto {
        return {
            products: products.map((p) => {
                const hasDiscount = p.discounted_price !== null && p.discounted_price !== undefined && p.discounted_price > 0;

                return {
                    id: p.id!,
                    name: p.name,
                    price: hasDiscount ? p.discounted_price! : p.price,
                    original_price: hasDiscount ? p.price : undefined,
                    tag: p.tag,
                    url_image: p.url_image
                }
            })
        }
    }
}