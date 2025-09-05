import { ColorProduct } from "../../domain/color-product/entity/color-product";
import { ColorProductGateway } from "../../domain/color-product/gateway/color-product.gateway";
import { Usecase } from "../usecase";

export type ListColorProductIdInputDto = {
    id_product: number;
};

export type ColorProductDto = {
    hex_code: string;
    name: string;
};

export type ListColorProductOutputDto = {
    colors: ColorProductDto[];
};

export class ListColorByProductIdUseCase implements Usecase<ListColorProductIdInputDto, ListColorProductOutputDto> {

    private constructor(private readonly colorProductGateway: ColorProductGateway) {}

    public static create(colorProductGateway: ColorProductGateway) {
        return new ListColorByProductIdUseCase(colorProductGateway);
    }

    public async execute(input: ListColorProductIdInputDto): Promise<ListColorProductOutputDto | null> {
        const colorProducts = await this.colorProductGateway.listByProductId(input.id_product);
        if (!colorProducts) {
            return null;
        }
        return this.presentOutput(colorProducts);
    }

    private presentOutput(colorProducts: ColorProduct[]): ListColorProductOutputDto {
        return {
            colors: colorProducts.map(colorProduct => ({
                hex_code: colorProduct.hex_code,
                name: colorProduct.name
            }))
        };
    }
}