import { ReviewGateway } from "../../domain/review/gateway/review.gateway";
import { Usecase } from "../usecase";

export type ListRatingByProductIdInputDto = {
    product_id: number;
}

export type ListRatingByProductIdOutputDto = {
data:  {
    	reviews: number,
		excellent: number,
		good: number,
		average: number,
		below_average: number,
		poor: number,
		media: number
}
}

export class ListRatingByProductIdUseCase implements Usecase<ListRatingByProductIdInputDto, ListRatingByProductIdOutputDto>{
    private constructor(private readonly reviewGateway: ReviewGateway){}

    public static create(reviewGateway: ReviewGateway){
        return new ListRatingByProductIdUseCase(reviewGateway);
    }

    public async execute(input: ListRatingByProductIdInputDto): Promise<ListRatingByProductIdOutputDto>{
        const aRating = await this.reviewGateway.listRatingByProductId(input.product_id);

        const output = this.presentOutput(aRating);

        return output;

    }

    private presentOutput(rating: number[]): ListRatingByProductIdOutputDto{
        const data = {
            reviews: rating.length,
            excellent: rating.filter(r => r === 5).length,
            good: rating.filter(r => r === 4).length,
            average: rating.filter(r => r === 3).length,
            below_average: rating.filter(r => r === 2).length,
            poor: rating.filter(r => r === 1).length,
            media: rating.reduce((acc, r) => acc + r, 0) / rating.length || 0
        };
        return { data };
    }
}