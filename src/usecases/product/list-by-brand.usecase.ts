import { Product } from "../../domain/product/entity/product";
import { ProductGateway } from "../../domain/product/gateway/product.gateway";
import { Usecase } from "../usecase";

export type ListProductsByBrandInputDto = {
    brand: string;
}

export type ListProductsByBrandOutputDto = {
    products: {
        id: number,
        name: string,
        price: number,
        original_price?: number,
        url_image: string
    }[];
}

export class ListProductsByBrandUseCase implements Usecase<ListProductsByBrandInputDto, ListProductsByBrandOutputDto> {
    private constructor(private readonly productGateway: ProductGateway) { }

    public static create(productGateway: ProductGateway) {
        return new ListProductsByBrandUseCase(productGateway);
    }

    public async execute(input: ListProductsByBrandInputDto): Promise<ListProductsByBrandOutputDto> {

        const aProducts = await this.productGateway.listByBrand(input.brand);

        const output = this.presentOutput(aProducts);

        return output;
    }

    private presentOutput(products: Product[]): ListProductsByBrandOutputDto {

        const productsWithId = products.filter((p): p is Product & { id: number } =>
            p.id !== undefined
        );

        return {
            products: productsWithId.map((p) => {
                const hasDiscount = p.discounted_price !== null && p.discounted_price !== undefined && p.discounted_price > 0;

                const productData = {
                    id: p.id,
                    name: p.name,
                    price: hasDiscount ? p.discounted_price! : p.price,
                    url_image: p.url_image
                };

                if (hasDiscount) {
                    return {
                        ...productData,
                        original_price: p.price,
                    };
                }
                return productData;
            })
        }
    }
}