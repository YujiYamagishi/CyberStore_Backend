import { StorageOption } from "../entity/storage-option";

export interface StorageOptionGateway{
    list(): Promise<StorageOption[]>;

}

