
import * as dotenv from 'dotenv';
dotenv.config();


import { ApiExpress } from "./infra/api/express/api.express";


import { ListCategoryRoute } from "./infra/api/express/routes/category/list.express.route";


import { ListProductsByBrandRoute } from "./infra/api/express/routes/product/list-by-brand.express";
import { ListProductByIdRoute } from "./infra/api/express/routes/product/list-by-id.express";
import { ListProductByTagRoute } from "./infra/api/express/routes/product/list-by-tag.express";
import { ListProductByCategoryRoute } from "./infra/api/express/routes/product/list-by-category.express";


import { GetBrandTotalsRoute } from "./infra/api/express/routes/brand/get-brand-totals.express.route";


import { ListRatingByProductIdRoute } from "./infra/api/express/routes/review/list-rating-by-product-id.express.route"; 
import { ListReviewsByProductIdRoute } from "./infra/api/express/routes/review/list-by-product-id.express.route";


import { shoppingCartRoutes } from "./infra/api/express/routes/shoppingCart/shoppingCart.route";


import { CategoryRepositoryPrisma } from "./infra/repositories/category/category.repository.prisma";
import { ProductRepositoryPrisma } from "./infra/repositories/product/product.repository.prisma";
import { ReviewRepositoryPrisma } from "./infra/repositories/review/review.repository.prisma";
import { ColorProductRepositoryPrisma } from "./infra/repositories/color-product/color-product.repository.prisma";
import { StorageOptionRepositoryPrisma } from "./infra/repositories/storage-option/storage-option.repository.prisma";


import { prisma } from "./package/prisma";


import { ListCategoryUseCase } from "./usecases/category/list.usecase";
import { ListProductsByBrandUseCase } from "./usecases/product/list-by-brand.usecase";
import { ListProductByIdUseCase } from "./usecases/product/list-by-id.usecase";
import { ListProductByTagUseCase } from "./usecases/product/list-by-tag.usecase";
import { ListProductByCategoryUseCase } from "./usecases/product/list-by-category.usecase";
import { GetBrandTotalsUseCase } from "./usecases/brand/get-brands-total.use-case";
import { ListRatingByProductIdUseCase } from "./usecases/review/list-rating-by-product-id.usecase"; 
import { ListReviewsByProductIdUseCase } from "./usecases/review/list-by-product-id.usecase";
import { ListColorByProductIdUseCase } from "./usecases/color-product/list-color-by-product-id.usecase";
import { ListStorageOptionByProductIdIUseCase } from "./usecases/storage-option/list-storage-option-by-product-id.usecase";


import * as swaggerUi from "swagger-ui-express";
import * as swaggerJsdoc from "swagger-jsdoc";
import { swaggerOptions } from "./docs/swagger/swagger-config";

function main() {
    
    const categoryRepository = CategoryRepositoryPrisma.create(prisma);
    const productRepository = ProductRepositoryPrisma.create(prisma);
    const reviewRepository = ReviewRepositoryPrisma.create(prisma);
    const colorProductRepository = ColorProductRepositoryPrisma.create(prisma);
    const storageOptionRepository = StorageOptionRepositoryPrisma.create(prisma);

    
    const listCategoryUsecase = ListCategoryUseCase.create(categoryRepository);
    const listProductByTagUsecase = ListProductByTagUseCase.create(productRepository);
    const listReviewsByProductIdUseCase = ListReviewsByProductIdUseCase.create(reviewRepository);

    const listColorByProductIdUseCase = ListColorByProductIdUseCase.create(colorProductRepository);
    const listStorageOptionByProductIdUseCase = ListStorageOptionByProductIdIUseCase.create(storageOptionRepository);

    const listProductByIdUsecase = ListProductByIdUseCase.create(
        productRepository, 
        listColorByProductIdUseCase, 
        listStorageOptionByProductIdUseCase
    );

    const listProductsByBrandUseCase = ListProductsByBrandUseCase.create(productRepository);
    const getBrandTotalsUseCase = GetBrandTotalsUseCase.create(productRepository);
    const listRatingByProductIdUseCase = ListRatingByProductIdUseCase.create(reviewRepository);
    const listProductsByCategoryUseCase = ListProductByCategoryUseCase.create(productRepository);

    
    const listRoute = ListCategoryRoute.create(listCategoryUsecase);
    const listProductByTagRoute = ListProductByTagRoute.create(listProductByTagUsecase);
    const listProductByIdRoute = ListProductByIdRoute.create(listProductByIdUsecase);
    const listReviewsByProductIdRoute = ListReviewsByProductIdRoute.create(listReviewsByProductIdUseCase);
    const listProductsByBrandRoute = ListProductsByBrandRoute.create(listProductsByBrandUseCase);
    const getBrandTotalsRoute = GetBrandTotalsRoute.create(getBrandTotalsUseCase);
    const listRatingByProductIdRoute = ListRatingByProductIdRoute.create(listRatingByProductIdUseCase);
    const listProductsByCategoryRoute = ListProductByCategoryRoute.create(listProductsByCategoryUseCase);

   
    const api = ApiExpress.create([
        listRoute, 
        listProductByTagRoute, 
        listProductByIdRoute, 
        listProductsByBrandRoute, 
        getBrandTotalsRoute, 
        listRatingByProductIdRoute, 
        listReviewsByProductIdRoute, 
        listProductsByCategoryRoute,
        ...shoppingCartRoutes   
    ]);

    
    const specs = swaggerJsdoc(swaggerOptions);
    api.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
    
    
    const port = 8000;
    api.start(port);
}

main();