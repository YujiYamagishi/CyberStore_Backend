import { Request, Response } from "express";
import { ListProductByTagOutputDto, ListProductByTagUseCase } from "../../../../../usecases/product/list-by-tag.usecase";
import { HttpMethod, Route } from "../route";

export type ListProductByTagResponseDto = {
    data: {
        id: number;
        name: string;
        price: number;
        original_price?: number | undefined;
        tag: string;
        url_image: string;
    }[]
}

export class ListProductByTagRoute implements Route {
    private readonly path: string;
    private readonly method: HttpMethod;
    private readonly listProductByTagService: ListProductByTagUseCase;

    private constructor(
        path: string,
        method: HttpMethod,
        listProductByTagService: ListProductByTagUseCase
    ) {
        this.path = path;
        this.method = method;
        this.listProductByTagService = listProductByTagService;
    }

    public static create(listProductByTagService: ListProductByTagUseCase): ListProductByTagRoute {
        return new ListProductByTagRoute(
            "/api/products/tag/:tag",
            HttpMethod.GET,
            listProductByTagService
        );
    }

    public getHandler() {
        return async (request: Request, response: Response): Promise<void> => {
            try {
                const { tag } = request.params;

                if (!tag) {
                    response.status(400).json({
                        error: "Tag parameter is required."
                    });
                    return;
                }

                const output = await this.listProductByTagService.execute({ tag });

                const responseBody = this.present(output);

                response.status(200).json(responseBody);
            } catch (error) {
                response.status(500).json({
                    error: "Internal server error."
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

    private present(input: ListProductByTagOutputDto): ListProductByTagResponseDto {
        return {
            data: input.products.map(product => ({
                id: product.id,
                name: product.name,
                price: product.price,
                original_price: product.original_price,
                tag: product.tag,
                url_image: product.url_image
            }))
        }
    }
}