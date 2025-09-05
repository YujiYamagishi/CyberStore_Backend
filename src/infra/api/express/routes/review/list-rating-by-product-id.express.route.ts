import { Request, Response } from "express";
import { HttpMethod, Route } from "../route"
import { ListRatingByProductIdOutputDto, ListRatingByProductIdUseCase } from "../../../../../usecases/review/list-rating-by-product-id.usecase";



export type ListRatingByProductIdResponseDto = {
    data: {
        reviews: number,
        excellent: number,
        good: number,
        average: number,
        below_average: number,
        poor: number,
        media: number
    }
}

export class ListRatingByProductIdRoute implements Route {
    private readonly path: string;
    private readonly method: HttpMethod;
    private readonly listRatingByProductIdService: ListRatingByProductIdUseCase;


    private constructor(
        path: string,
        method: HttpMethod,
        listRatingByProductIdService: ListRatingByProductIdUseCase
    ) {
        this.path = path;
        this.method = method;
        this.listRatingByProductIdService = listRatingByProductIdService;
    }

    public static create(listRatingByProductIdService: ListRatingByProductIdUseCase): ListRatingByProductIdRoute {
        return new ListRatingByProductIdRoute(
            "/api/reviews/summary/:product_id",
            HttpMethod.GET,
            listRatingByProductIdService
        );
    }

    public getHandler() {
        return async (request: Request, response: Response): Promise<void> => {
            try {
                const { product_id } = request.params;

                if (!product_id) {
                    response.status(400).json({
                        error: "Product ID parameter is required."
                    });
                    return
                }

                const output = await this.listRatingByProductIdService.execute({ product_id: Number(product_id) });
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

    private present(input: ListRatingByProductIdOutputDto): ListRatingByProductIdResponseDto {
    return {
        data: {
            reviews: input.data.reviews,
            excellent: input.data.excellent,
            good: input.data.good,
            average: input.data.average,
            below_average: input.data.below_average,
            poor: input.data.poor,
            media: input.data.media
        }
    };

}
}




