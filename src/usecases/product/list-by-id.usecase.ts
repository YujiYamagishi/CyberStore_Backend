import { Product } from "../../domain/product/entity/product";
import { ProductGateway } from "../../domain/product/gateway/product.gateway";
import { Usecase } from "../usecase";

export type ListProductByIdInputDto = {
    id: number;
};

export type SmartphoneSpecDto = {
    screen_size: string;
    cpu: string;
    total_cores: string;
    main_camera: string;
    front_camera: string;
    battery: string;
    created_at: Date;
    updated_at?: Date | undefined | null;
};

export type ListProductByIdOutputDto = {
    products: {
        id: number;
        name: string;
        description: string;
        brand: string;
        price: number;
        discounted_price: number;
        stock: number;
        url_image: string;
        created_at: Date;
        updated_at?: Date | undefined;
        id_category: number;
        tag: string;
        id_specs_smartphone?: number | null ;
        smartphoneSpec?: SmartphoneSpecDto | null;
    }
};

export class ListProductByIdUseCase implements Usecase<ListProductByIdInputDto, ListProductByIdOutputDto> {
    private constructor(private readonly productGateway: ProductGateway) { }

    public static create(productGateway: ProductGateway) {
        return new ListProductByIdUseCase(productGateway);
    }

    public async execute(input: ListProductByIdInputDto): Promise<ListProductByIdOutputDto | null> {
        const { product, smartphoneSpec } = await this.productGateway.listById(input.id);

        if (!product) {
           return null;
        }
        return this.presentOutput(product, smartphoneSpec);
    }

    private presentOutput(product: Product, smartphoneSpec?: SmartphoneSpecDto | null): ListProductByIdOutputDto {
        const base = {
            id: product.id!,
            name: product.name,
            description: product.description,
            brand: product.brand,
            price: product.price,
            discounted_price: product.discounted_price,
            stock: product.stock,
            url_image: product.url_image,
            created_at: product.created_at,
            updated_at: product.updated_at,
            id_category: product.id_category,
            tag: product.tag,
            id_specs_smartphone: product.id_specs_smartphone ?? null,
        };

        return {
            products: {
                ...base,
                ...(product.id_specs_smartphone != null && smartphoneSpec
                    ? { smartphoneSpec }
                    : {})
            }
        };
    }
}