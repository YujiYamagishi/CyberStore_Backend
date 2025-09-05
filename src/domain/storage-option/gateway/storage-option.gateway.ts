import { StorageOption } from "../entity/storage-option";

export interface StorageOptionGateway{
    listByProductId(product_id: number): Promise<StorageOption[] | null>;
}

