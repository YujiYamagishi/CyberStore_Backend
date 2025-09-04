import { ApiExpress } from "./infra/api/express/api.express";
import { ListCategoryRoute } from "./infra/api/express/routes/category/list.express.route";
import { ListProductsByBrandRoute } from "./infra/api/express/routes/product/list-by-brand.express";
import { ListProductByIdRoute } from "./infra/api/express/routes/product/list-by-id.express";
import { ListProductByTagRoute } from "./infra/api/express/routes/product/list-by-tag.express";
import { CategoryRepositoryPrisma } from "./infra/repositories/category/category.repository.prisma";
import { ProductRepositoryPrisma } from "./infra/repositories/product/product.repository.prisma";
import { prisma } from "./package/prisma";
import { ListCategoryUseCase } from "./usecases/category/list.usecase";
import { ListProductsByBrandUseCase } from "./usecases/product/list-by-brand.usecase";
import { ListProductByIdUseCase } from "./usecases/product/list-by-id.usecase";
import { ListProductByTagUseCase } from "./usecases/product/list-by-tag.usecase";
import { GetBrandTotalsUseCase } from "./usecases/brand/get-brands-total.use-case";
import { GetBrandTotalsRoute } from "./infra/api/express/routes/brand/get-brand-totals.express.route";
import { ListRatingByProductIdUseCase } from "./usecases/review/list-rating-by-product-id.usecase"; 
import { ListRatingByProductIdRoute } from "./infra/api/express/routes/review/list-rating-by-product-id.express.route"; 
import { ListReviewsByProductIdUseCase} from "./usecases/review/list-by-product-id.usecase";
import { ListReviewsByProductIdRoute } from "./infra/api/express/routes/review/list-by-product-id.express.route";
import { ReviewRepositoryPrisma } from "./infra/repositories/review/review.repository.prisma";
import * as swaggerUi from "swagger-ui-express";
import * as swaggerJsdoc from "swagger-jsdoc"
import { swaggerOptions } from "./docs/swagger/swagger-config";
import { ListProductByCategoryUseCase } from "./usecases/product/list-by-category.usecase";
import { ListProductByCategoryRoute } from "./infra/api/express/routes/product/list-by-category.express";
import { ColorProductRepositoryPrisma } from "./infra/repositories/color-product/color-product.repository.prisma";
import { ListColorByProductIdUseCase } from "./usecases/color-product/list-color-by-product-id.usecase";

function main() {

    const aRepository = CategoryRepositoryPrisma.create(prisma);
    const productRepository = ProductRepositoryPrisma.create(prisma);
    const reviewRepository = ReviewRepositoryPrisma.create(prisma);
    const listColorByProductIdUseCase = ListColorByProductIdUseCase.create(ColorProductRepositoryPrisma.create(prisma));

    const listCategoryUsecase = ListCategoryUseCase.create(aRepository);
    const listProductByTagUsecase = ListProductByTagUseCase.create(productRepository);
    const listReviewsByProductIdUseCase = ListReviewsByProductIdUseCase.create(reviewRepository);

    const listRoute = ListCategoryRoute.create(listCategoryUsecase);
    const listProductByTagRoute = ListProductByTagRoute.create(listProductByTagUsecase);

    const listProductByIdUsecase = ListProductByIdUseCase.create(productRepository, listColorByProductIdUseCase);
    const listProductByIdRoute = ListProductByIdRoute.create(listProductByIdUsecase);
    const listReviewsByProductIdRoute = ListReviewsByProductIdRoute.create(listReviewsByProductIdUseCase);

    const listProductsByBrandUseCase = ListProductsByBrandUseCase.create(productRepository);
    const listProductsByBrandRoute = ListProductsByBrandRoute.create(listProductsByBrandUseCase)

    const getBrandTotalsUseCase = GetBrandTotalsUseCase.create(productRepository);
    const getBrandTotalsRoute = GetBrandTotalsRoute.create(getBrandTotalsUseCase);

    const listRatingByProductIdUseCase = ListRatingByProductIdUseCase.create(reviewRepository);
    const listRatingByProductIdRoute = ListRatingByProductIdRoute.create(listRatingByProductIdUseCase);

    const listProductsByCategoryUseCase = ListProductByCategoryUseCase.create(productRepository);
    const listProductsByCategoryRoute = ListProductByCategoryRoute.create(listProductsByCategoryUseCase)

    const api = ApiExpress.create([listRoute, listProductByTagRoute, listProductByIdRoute, listProductsByBrandRoute, getBrandTotalsRoute, listRatingByProductIdRoute, listReviewsByProductIdRoute, listProductsByCategoryRoute]);
    const specs = swaggerJsdoc(swaggerOptions);
    api.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
    const port = 8000;
    api.start(port);
}

main();