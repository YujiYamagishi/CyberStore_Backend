import { type Request, type Response } from 'express-serve-static-core';
import { HttpMethod, type Route } from '../route';
import { ListReviewsByProductIdUseCase } from '../../../../../usecases/review/list-by-product-id.usecase';
import { PaginatedReviews } from '../../../../../domain/review/entity/review-paginated';

export type ListReviewsByProductIdResponseDto = PaginatedReviews;

export class ListReviewsByProductIdRoute implements Route {
    private readonly path: string;
    private readonly method: HttpMethod;
    private readonly listReviewsByProductIdUseCase: ListReviewsByProductIdUseCase;

    private constructor(
        path: string,
        method: HttpMethod,
        listReviewsByProductIdUseCase: ListReviewsByProductIdUseCase
    ) {
        this.path = path;
        this.method = method;
        this.listReviewsByProductIdUseCase = listReviewsByProductIdUseCase;
    }

    public static create(listReviewsByProductIdUseCase: ListReviewsByProductIdUseCase): ListReviewsByProductIdRoute {
        return new ListReviewsByProductIdRoute(
            "/api/reviews/comment/:productId",
            HttpMethod.GET,
            listReviewsByProductIdUseCase
        );
    }

    public getHandler() {
        return async (request: Request, response: Response): Promise<void> => {
            try {
                const { productId } = request.params;

                if (!productId) {
                    response.status(400).json({ message: 'Product ID is required.' });
                    return;
                }

                const productIdAsNumber = parseInt(productId, 10);
                
                if (isNaN(productIdAsNumber)) {
                    response.status(400).json({ message: 'Product ID must be a number.' });
                    return;
                }

                const page = request.query.page ? parseInt(request.query.page as string, 10) : 1;
                const pageSize = request.query.size ? parseInt(request.query.size as string, 10) : 3;

                const input = { 
                    productId: productIdAsNumber, 
                    page, 
                    pageSize 
                };
                
                const output = await this.listReviewsByProductIdUseCase.execute(input);
                const responseBody = this.present(output);
                
                response.status(200).json(responseBody);

            } catch (error: any) {
                response.status(500).json({ message: error.message || 'Internal Server Error' });
            }
        };
    }

    public getPath(): string {
        return this.path;
    }

    public getMethod(): HttpMethod {
        return this.method;
    }

    private present(input: PaginatedReviews): ListReviewsByProductIdResponseDto {
        return input;
    }
}