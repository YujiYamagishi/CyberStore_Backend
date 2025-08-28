import type { Category } from "../../domain/category/entity/category";
import type { CategoryGateway } from "../../domain/category/gateway/category.gateway";
import type { Usecase } from "../usecase";

export type ListCategoryInputDto = void;

export type ListCategoryOutputDto = {
    categories: string[];

}

export class ListCategoryUseCase implements Usecase<ListCategoryInputDto, ListCategoryOutputDto> {
    private constructor(private readonly categoryGateway: CategoryGateway) { }

    public static create(categoryGateway: CategoryGateway) {
        return new ListCategoryUseCase(categoryGateway);
    }

    public async execute(input: void): Promise<ListCategoryOutputDto> {
        const aCategories = await this.categoryGateway.list();
        const output = this.presentOutput(aCategories);

        return output;
    }

    private presentOutput(categories: Category[]): ListCategoryOutputDto {
        return {
            categories: categories.map((c) => c.name),
        };
    }
}