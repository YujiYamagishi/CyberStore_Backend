import { Product } from "../../domain/product/entity/product";
import { ProductGateway } from "../../domain/product/gateway/product.gateway";
import { Usecase } from "../usecase";

export type ListProductByTagInputDto = {
    tag: string;
}

export type ListProductByOutputTagDto = {
    products: {
        id: number,
        name: string
        price: number
        tag: string
        url_image: string
    }[];

}

export class ListProductByTagUseCase implements Usecase<ListProductByTagInputDto, ListProductByOutputTagDto> {
    private constructor(private readonly productGateway: ProductGateway) { }

    public static create(productGateway: ProductGateway) {
        return new ListProductByTagUseCase(productGateway);
    }

    public async execute(input: ListProductByTagInputDto): Promise<ListProductByOutputTagDto> {

        const aProducts = await this.productGateway.listByTag(input.tag);

        const output = this.presentOutput(aProducts);

        return output;

    }

    private presentOutput(products: Product[]): ListProductByOutputTagDto {

        const productsWithId = products.filter((p): p is Product & { id: number } =>
            p.id !== undefined
        );

        return {
            products: productsWithId.map((p) => {
                return {
                    id: p.id,
                    name: p.name,
                    price: p.price,
                    tag: p.tag,
                    url_image: p.url_image
                }
            })
        }
    }
}