import { ApiExpress } from "./infra/api/express/api.express";
import { ListCategoryRoute } from "./infra/api/express/routes/category/list.express.route";
import { ListProductByTagRoute } from "./infra/api/express/routes/product/listByTag.express";
import { CategoryRepositoryPrisma } from "./infra/repositories/category/category.repository.prisma";
import { ProductRepositoryPrisma } from "./infra/repositories/product/product.repository.prisma";
import { prisma } from "./package/prisma"; 
import { ListCategoryUseCase } from "./usecases/category/list.usecase";
import { ListProductByTagUseCase } from "./usecases/product/listByTag.usecase";

function main() {

    const aRepository = CategoryRepositoryPrisma.create(prisma);
    const productRepository = ProductRepositoryPrisma.create(prisma);

    const listCategoryUsecase = ListCategoryUseCase.create(aRepository);
    const listProductByTagUsecase = ListProductByTagUseCase.create(productRepository);

    const listRoute = ListCategoryRoute.create(listCategoryUsecase);
    const listProductByTagRoute = ListProductByTagRoute.create(listProductByTagUsecase);


    const api = ApiExpress.create([listRoute, listProductByTagRoute]);
    const port = 8000;
    api.start(port);
}

main();