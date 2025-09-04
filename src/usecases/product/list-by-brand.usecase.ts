import { Product } from "../../domain/product/entity/product";
import { ProductGateway } from "../../domain/product/gateway/product.gateway";
import { Usecase } from "../usecase";

export type ListProductsByBrandInputDto = {
    brand: string;
}

export type ListProductsByBrandOutputDto = {
    products: {
        id: number,
        name: string
        price: number
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
                return {
                    id: p.id,
                    name: p.name,
                    price: p.price,
                    url_image: p.url_image
                }
            })
        }
    }
}