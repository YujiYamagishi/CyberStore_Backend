import { ApiExpress } from "./infra/api/express/api.express";
import { ListCategoryRoute } from "./infra/api/express/routes/category/list.express.route";
import { CategoryRepositoryPrisma } from "./infra/repositories/category/category.repository.prisma";
import { prisma } from "./package/prisma"; 
import { ListCategoryUseCase } from "./usecases/category/list.usecase";

function main() {

    const aRepository = CategoryRepositoryPrisma.create(prisma);

    const listCategoryUsecase = ListCategoryUseCase.create(aRepository);

    const listRoute = ListCategoryRoute.create(listCategoryUsecase);


    const api = ApiExpress.create([listRoute]);
    const port = 8000;
    api.start(port);
}

main();