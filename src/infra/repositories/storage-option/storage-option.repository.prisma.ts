import { PrismaClient } from "@prisma/client";
import { StorageOptionGateway } from "../../../domain/storage-option/gateway/storage-option.gateway";
import { StorageOption} from "../../../domain/storage-option/entity/storage-option";

export class StorageOptionRepositoryPrisma implements StorageOptionGateway {
    private constructor(private readonly prismaClient: PrismaClient) { }

    public static create(prismaClient: PrismaClient) {
        return new StorageOptionRepositoryPrisma(prismaClient);
    }

    public async listByProductId(id_product: number): Promise<StorageOption[]> {
        const storageOptions = await this.prismaClient.storageOption.findMany({
            where: { id_product }
        })

        const storageOptionList = storageOptions.map((s) => {
            const storageOption = StorageOption.with({
                id_product: s.id_product,
                size: s.size,
                created_at: s.created_at,
            })
            return storageOption;
        })
        return storageOptionList;
    }
}