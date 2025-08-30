import { type Request, type Response } from "express";

import { GetBrandTotalsUseCase } from "../../../../../usecases/brand/get-brands-total.use-case";
import { BrandTotal } from "../../../../../domain/brand/entity/brand-total.entity";
import { HttpMethod, type Route } from "../route";
import { request } from "http";

export type GetBrandTotalsResponseDTO = {
    data: {
        brand: string,
        total: number,
    }[],
}

export class GetBrandTotalsRoute implements Route {
    private readonly path: string;
    private readonly method: HttpMethod;
    private readonly getBrandTotalsUseCase: GetBrandTotalsUseCase;

    private constructor(
        path: string,
        method: HttpMethod,
        getBrandTotalsUseCase: GetBrandTotalsUseCase,
    ) {
        this.path = path;
        this.method = method;
        this.getBrandTotalsUseCase = getBrandTotalsUseCase;
    }

    public static create(getBrandTotalsUseCase: GetBrandTotalsUseCase):GetBrandTotalsRoute{
        return new GetBrandTotalsRoute(
            '/api/products/brands',
            HttpMethod.GET,
            getBrandTotalsUseCase
        );
    }
    public getHandler(){
        return async (request:Request, response:Response)=>{
            const output = await this.getBrandTotalsUseCase.execute();
            const responseBody = this.present(output);
            response.status(200).json(responseBody);
        };
    }

    public getPath(): string {
        return this.path;
    }

    public getMethod(): HttpMethod {
        return this.method;
    }

    private present(input: BrandTotal[]): GetBrandTotalsResponseDTO{
        const response: GetBrandTotalsResponseDTO = {
            data: input.map(item => ({
                brand: item.brand,
                total: item.total,
            }))
        };
        return response;
    }
}



