
import { StorageOption } from "../../domain/storage-option/entity/storage-option";
import { StorageOptionGateway } from "../../domain/storage-option/gateway/storage-option.gateway";
import { Usecase } from "../usecase";

export type ListStorageOptionByProductIdInputDto = {
    id_product: number;
}

export type ListStorageOptionOutputDto = {
    sizes: string[];
}

export class ListStorageOptionByProductIdIUseCase implements Usecase<ListStorageOptionByProductIdInputDto, ListStorageOptionOutputDto> {

    private constructor(private readonly storageOptionGateway: StorageOptionGateway) { }

    public static create(storageOptionGateway: StorageOptionGateway) {
        return new ListStorageOptionByProductIdIUseCase(storageOptionGateway);
    }

    public async execute(input: ListStorageOptionByProductIdInputDto): Promise<ListStorageOptionOutputDto | null> {
        const storageOptions = await this.storageOptionGateway.listByProductId(input.id_product);
        if (!storageOptions) {
            return null;
        }
        return this.presentOutput(storageOptions);
    }

    private presentOutput(storageOptions: StorageOption[]): ListStorageOptionOutputDto {
        return {
            sizes: storageOptions.map(option => option.size)
        };
    }
}