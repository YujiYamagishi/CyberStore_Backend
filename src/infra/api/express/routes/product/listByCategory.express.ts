import { Request, Response } from "express";
import { ListProductByCategoryOutputDto, ListProductByCategoryUseCase } from "../../../../../usecases/product/listByCategory.usecase";
import { HttpMethod, Route } from "../route";

export type ListProductByCategoryResponseDto = {
    data: {
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

export class ListProductByCategoryRoute implements Route {
    private readonly path: string;
    private readonly method: HttpMethod;
    private readonly listProductByCategoryService: ListProductByCategoryUseCase;

    private constructor(
        path: string,
        method: HttpMethod,
        listProductByCategoryService: ListProductByCategoryUseCase
    ) {
        this.path = path;
        this.method = method;
        this.listProductByCategoryService = listProductByCategoryService;
    }

    public static create(listProductByCategoryService: ListProductByCategoryUseCase): ListProductByCategoryRoute {
        return new ListProductByCategoryRoute(
            "/api/products/category/:category",
            HttpMethod.GET,
            listProductByCategoryService
        );


    }

    public getHandler() {
        return async (request: Request, response: Response): Promise<void> => {
            try {
                const { category } = request.params;
                const {sort, order} = request.query;
                const filters = request.body?.filters ?? {};

                const page = parseInt(request.query.page as string) || 1;
                const validatedPage = page < 1 ? 1 : page;

                const limit = parseInt(request.query.limit as string) || 9;
                const validatedLimit = limit < 1 ? 9 : limit; 

                if (!category) {
                    response.status(400).json({
                        error: "Category parameter is required"
                    });
                    return
                }

                const output = await this.listProductByCategoryService.execute({
                    category,
                    page: validatedPage,
                    limit: validatedLimit,
                    sort: sort as string ,
                    order: order as string,
                    brands: filters?.brands ?? []
                });

                const responseBody = this.present(output);

                response.status(200).json(responseBody);
            } catch (error) {
                console.error("Error in ListProductByCategoryRoute", error);
                response.status(500).json({
                    error: "Internal server error"
                });
            }
        }
    }

    public getPath(): string {
        return this.path;
    }

    public getMethod(): HttpMethod {
        return this.method;
    }

    private present(input: ListProductByCategoryOutputDto): ListProductByCategoryResponseDto {
        return {
            data: input.products.map(product => ({
                id: product.id as number,
                name: product.name,
                price: product.price,
                url_image: product.url_image,
                description: product.description,
                brand: product.brand,
                stock: product.stock,
                id_category: product.id_category,
            })),
            metadata: input.metadata
        }
    }
}