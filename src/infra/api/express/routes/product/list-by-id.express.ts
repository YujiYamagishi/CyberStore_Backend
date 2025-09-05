import { Request, Response } from "express";
import { HttpMethod, Route } from "../route";
import { ListProductByIdUseCase, ListProductByIdOutputDto } from "../../../../../usecases/product/list-by-id.usecase";


export class ListProductByIdRoute implements Route {
    private readonly path: string;
    private readonly method: HttpMethod;
    private readonly getProductByIdService: ListProductByIdUseCase;

    private constructor(
        path: string,
        method: HttpMethod,
        getProductByIdService: ListProductByIdUseCase
    ) {
        this.path = path;
        this.method = method;
        this.getProductByIdService = getProductByIdService;
    }

    public static create(getProductByIdService: ListProductByIdUseCase): ListProductByIdRoute {
        return new ListProductByIdRoute(
            "/api/product/:id",
            HttpMethod.GET,
            getProductByIdService
        );
    }

    public getHandler() {
        return async (request: Request, response: Response): Promise<void> => {
            try {
                const { id } = request.params;
                const numericId = Number(id);

                if (isNaN(numericId)) {
                    response.status(400).json({
                        error: "Id parameter must be a number."
                    });
                    return;
                }

                const output = await this.getProductByIdService.execute({ id: numericId });

                if (!output) {
                    response.status(404).json({
                        error: "Product not found."
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

    private present(input: ListProductByIdOutputDto): ListProductByIdOutputDto {
        return input;
    }
}