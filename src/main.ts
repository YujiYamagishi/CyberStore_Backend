import { ApiExpress } from "./infra/api/express/api.express";
import { ListCategoryRoute } from "./infra/api/express/routes/category/list.express.route";
import { ListProductsByBrandRoute } from "./infra/api/express/routes/product/listByBrand.express";
import { ListProductByIdRoute } from "./infra/api/express/routes/product/listById.express";
import { ListProductByTagRoute } from "./infra/api/express/routes/product/listByTag.express";
import { CategoryRepositoryPrisma } from "./infra/repositories/category/category.repository.prisma";
import { ProductRepositoryPrisma } from "./infra/repositories/product/product.repository.prisma";
import { prisma } from "./package/prisma";
import { ListCategoryUseCase } from "./usecases/category/list.usecase";
import { ListProductsByBrandUseCase } from "./usecases/product/listByBrand.usecase";
import { ListProductByIdUseCase } from "./usecases/product/listById.usecase";
import { ListProductByTagUseCase } from "./usecases/product/listByTag.usecase";
import { GetBrandTotalsUseCase } from "./usecases/brand/get-brands-total.use-case";
import { GetBrandTotalsRoute } from "./infra/api/express/routes/brand/get-brand-totals.express.route";
import { ListRatingByProductIdUseCase } from "./usecases/review/listRatingByProductId.usecase"; 
import { ListRatingByProductIdRoute } from "./infra/api/express/routes/review/listRatingByProductId.express"; 
import { ReviewRepositoryPrisma } from "./infra/repositories/review/review.repository";
function main() {

    const aRepository = CategoryRepositoryPrisma.create(prisma);
    const productRepository = ProductRepositoryPrisma.create(prisma);
    const reviewRepository = ReviewRepositoryPrisma.create(prisma);

    const listCategoryUsecase = ListCategoryUseCase.create(aRepository);
    const listProductByTagUsecase = ListProductByTagUseCase.create(productRepository);

    const listRoute = ListCategoryRoute.create(listCategoryUsecase);
    const listProductByTagRoute = ListProductByTagRoute.create(listProductByTagUsecase);

    const listProductByIdUsecase = ListProductByIdUseCase.create(productRepository);
    const listProductByIdRoute = ListProductByIdRoute.create(listProductByIdUsecase);

    const listProductsByBrandUseCase = ListProductsByBrandUseCase.create(productRepository);
    const listProductsByBrandRoute = ListProductsByBrandRoute.create(listProductsByBrandUseCase)

    const getBrandTotalsUseCase = GetBrandTotalsUseCase.create(productRepository);
    const getBrandTotalsRoute = GetBrandTotalsRoute.create(getBrandTotalsUseCase);

    const listRatingByProductIdUseCase = ListRatingByProductIdUseCase.create(reviewRepository);
    const listRatingByProductIdRoute = ListRatingByProductIdRoute.create(listRatingByProductIdUseCase);

    const api = ApiExpress.create([listRoute, listProductByTagRoute, listProductByIdRoute, listProductsByBrandRoute, getBrandTotalsRoute, listRatingByProductIdRoute]);
    const port = 8000;
    api.start(port);
}

main();