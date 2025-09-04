import { PrismaClient } from "@prisma/client";
import { Product } from "../../../domain/product/entity/product";
import { ProductGateway } from "../../../domain/product/gateway/product.gateway";
import { SmartphoneSpecDto } from "../../../usecases/product/list-by-id.usecase";
import { BrandTotal } from "../../../domain/brand/entity/brand-total.entity";

export class ProductRepositoryPrisma implements ProductGateway {

    private constructor(private readonly prismaClient: PrismaClient) { }
    async getBrandTotals(): Promise<BrandTotal[]> {
        const result = await this.prismaClient.product.groupBy({
            by: ['brand'],
            _count: {brand:true},
        })

        const brandTotals = result.map(item => BrandTotal.create({
            brand: item.brand,
            total: item._count.brand,
        }))

        return brandTotals;
    };

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

    public async listByBrand(brand: string): Promise<Product[]> {
        const products = await this.prismaClient.product.findMany({
            where: {
                brand
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

    public async listByCategory(
        category: string,
        page: number = 1,
        limit: number = 9,
        sort: string = "",
        order: string = "",
        brands: string[] = []
    ): Promise<{
        data: Product[];
        metadata: {
            total_pages: number;
            actual_page: number;
            total_items: number;
            per_page: number;
        };
    }> {
        const skip = (page - 1) * limit;

        const allowedSortFields = ["price", "name"];
        const allowedOrder = ["asc", "desc"];

        const sortField = allowedSortFields.includes(sort) ? sort : "";
        const sortOrder = allowedOrder.includes(order) ? order : "";

        const whereClause: any = {
            category: {
                name: {
                    equals: category,
                },
            },
        };

        if (brands.length > 0) {
            whereClause.brand = {
                in: brands,
            };
        }

        const totalItems = await this.prismaClient.product.count({
            where: whereClause,
        });

        const products = await this.prismaClient.product.findMany({
            where: whereClause,
            skip,
            take: limit,
            ...(sortField && sortOrder ? { orderBy: { [sortField]: sortOrder } } : {}),
        });

        const productList = products.map((p) =>
            Product.with({
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
                id_specs_smartphone: p.id_specs_smartphone,
            })
        );

        return {
            data: productList,
            metadata: {
                total_pages: Math.ceil(totalItems / limit),
                actual_page: page,
                total_items: totalItems,
                per_page: limit,
            },
        };
    }

}