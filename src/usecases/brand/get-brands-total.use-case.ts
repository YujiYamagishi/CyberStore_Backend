import { BrandTotal } from "../../domain/brand/entity/brand-total.entity";
import { ProductGateway } from "../../domain/product/gateway/product.gateway";
export class GetBrandTotalsUseCase{
    private constructor(private readonly productGateway: ProductGateway){}

    public static create(productGateway: ProductGateway){
        return new GetBrandTotalsUseCase(productGateway);
    }

    public async execute(): Promise<BrandTotal[]> {
        const brandTotals = await this.productGateway.getBrandTotals();

        return brandTotals;
    }
}