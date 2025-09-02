import { Request, Response } from "express";
import { HttpMethod, Route } from "../route";
import { ListProductByIdUseCase, ListProductByIdOutputDto } from "../../../../../usecases/product/listById.usecase";

export class ListProductByIdRoute implements Route {
    private readonly path: string;
    private readonly method: HttpMethod;
    private readonly listProductByIdService: ListProductByIdUseCase;

    private constructor(
        path: string,
        method: HttpMethod,
        listProductByIdService: ListProductByIdUseCase
    ) {
        this.path = path;
        this.method = method;
        this.listProductByIdService = listProductByIdService;
    }

    public static create(listProductByIdService: ListProductByIdUseCase): ListProductByIdRoute {
        return new ListProductByIdRoute(
            "/api/product/:id",
            HttpMethod.GET,
            listProductByIdService
        );
    }

    public getHandler() {
        return async (request: Request, response: Response): Promise<void> => {
            try {
                const { id } = request.params;
                const numericId = Number(id);

                if (isNaN(numericId)) {
                    response.status(400).json({
                        error: "Id parameter is required"
                    });
                    return;
                }

                const output = await this.listProductByIdService.execute({ id: numericId });
                const responseBody = this.present(output);

                response.status(200).json(responseBody);
            } catch (error) {
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

    private present(input: ListProductByIdOutputDto) {
        return {
            data: input.products
        };
    }
}