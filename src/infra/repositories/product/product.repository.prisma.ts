import { PrismaClient } from "@prisma/client";
import { Product } from "../../../domain/product/entity/product";
import { ProductGateway } from "../../../domain/product/gateway/product.gateway";
import { SmartphoneSpecDto } from "../../../usecases/product/listById.usecase";

export class ProductRepositoryPrisma implements ProductGateway {

    private constructor(private readonly prismaClient: PrismaClient) { }

    public static create(prismaClient: PrismaClient) {
        return new ProductRepositoryPrisma(prismaClient);
    }

    //Fernando- Verificar o retorno de todos os itens
    public async list(): Promise<Product[]> {
        return [];
    }

    public async listById(id: number): Promise<{ product: Product | undefined; smartphoneSpec?: SmartphoneSpecDto | null; }> {
        const p = await this.prismaClient.product.findUnique({
            where: { id },
            include: { smartphoneSpec: true }
        });

        if (!p) {
            return { product: undefined, smartphoneSpec: null };
        }

        const product = Product.with({
            id: p.id,
            name: p.name,
            description: p.description,
            brand: p.brand,
            price: Number(p.price),
            discounted_price: Number(p.discounted_price),
            stock: p.stock,
            url_image: p.url_image,
            created_at: p.created_at,
            updated_at: p.update_at,
            id_category: p.id_category,
            tag: p.tag,
            id_specs_smartphone: p.id_specs_smartphone
        });

        let smartphoneSpec: SmartphoneSpecDto | null = null;
        if (p.smartphoneSpec) {
            smartphoneSpec = {
                screen_size: p.smartphoneSpec.screen_size,
                cpu: p.smartphoneSpec.cpu,
                total_cores: p.smartphoneSpec.total_cores,
                main_camera: p.smartphoneSpec.main_camera,
                front_camera: p.smartphoneSpec.front_camera,
                battery: p.smartphoneSpec.battery,
                created_at: p.smartphoneSpec.created_at,
                updated_at: p.smartphoneSpec.update_at
            };
        }

        return { product, smartphoneSpec };
    }

    
    public async listByTag(tag: string): Promise<Product[]> {
        const products = await this.prismaClient.product.findMany({
            where: {
                tag
            }
        })

        const productList = products.map((p) => {
            const product = Product.with({
                id: p.id,
                name: p.name,
                description: p.description,
                brand: p.brand,
                price: Number(p.price),
                discounted_price: Number(p.discounted_price),
                stock: p.stock,
                url_image: p.url_image,
                created_at: p.created_at,
                updated_at: p.update_at,
                id_category: p.id_category,
                tag: p.tag,
                id_specs_smartphone: p.id_specs_smartphone
            });

            return product;
        })

        return productList;
    }

}