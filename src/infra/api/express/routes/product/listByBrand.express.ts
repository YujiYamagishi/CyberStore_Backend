import { Request, Response } from "express";
import { ListProductsByBrandOutputDto, ListProductsByBrandUseCase } from "../../../../../usecases/product/listByBrand.usecase";
import { HttpMethod, Route } from "../route";

export type ListProductsByBrandResponseDto = {
    data: {
        id: number;
        name: string;
        price: number;
        url_image: string
    }[]
}

export class ListProductsByBrandRoute implements Route {
    private readonly path: string;
    private readonly method: HttpMethod;
    private readonly listProductsByBrandService: ListProductsByBrandUseCase;

    private constructor(
        path: string,
        method: HttpMethod,
        listProductsByBrandService: ListProductsByBrandUseCase,
    ) {
        this.path = path;
        this.method = method;
        this.listProductsByBrandService = listProductsByBrandService;
    }

    public static create(listProductsByBrandService: ListProductsByBrandUseCase): ListProductsByBrandRoute {
        return new ListProductsByBrandRoute(
            "/api/products/related/:brand",
            HttpMethod.GET,
            listProductsByBrandService
        );
    }

    public getHandler() {
        return async (request: Request, response: Response): Promise<void> => {
            try {
                const { brand } = request.params;

                if (!brand) {
                    response.status(400).json({
                        error: "Brand parameter is required."
                    });
                    return;
                }

                const output = await this.listProductsByBrandService.execute({ brand });

                if (!output || !output.products || output.products.length === 0) {
                    response.status(404).json({
                        error: "No products found for this brand."
                    });
                    return;
                }

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

    private present(input: ListProductsByBrandOutputDto): ListProductsByBrandResponseDto {
        return {
            data: input.products.map(product => ({
                id: product.id as number,
                name: product.name,
                price: product.price,
                url_image: product.url_image
            }))
        }
    }

}
