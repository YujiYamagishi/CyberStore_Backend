import { ListCategoryUseCase, type ListCategoryOutputDto } from "../../../../../usecases/category/list.usecase";
import { HttpMethod, type Route } from "../route";
import type { Request, Response } from "express-serve-static-core";

export type ListCategoryResponseDto = {
    categories: string[],
}

export class ListCategoryRoute implements Route {
    private readonly path: string;
    private readonly method: HttpMethod;
    private readonly listCategoryService: ListCategoryUseCase;

    private constructor(
        path: string,
        method: HttpMethod,
        listCategoryService: ListCategoryUseCase
    ) {
        this.path = path;
        this.method = method;
        this.listCategoryService = listCategoryService;
    }

    public static create(listCategoryService: ListCategoryUseCase): ListCategoryRoute {
        return new ListCategoryRoute(
            "/api/categories",
            HttpMethod.GET,
            listCategoryService
        );
    }

public getHandler() {
    return async (request: Request, response: Response) => {
        try {
            const output = await this.listCategoryService.execute();

            const responseBody = this.present(output);

            response.status(200).json(responseBody);
        } catch (error) {
            response.status(500).json({ error: "Internal server error." });
        }
    };
}

    public getPath(): string {
        return this.path;
    }

    public getMethod(): HttpMethod {
        return this.method;
    }

    private present(input: ListCategoryOutputDto): ListCategoryResponseDto{
        const response: ListCategoryResponseDto = {
            categories: input.categories
        };
        return response;
    }

}