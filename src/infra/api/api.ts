import { ApiExpress } from "./express/api.express";
import { GetShoppingCartRoute } from "./express/routes/shoppingCart/getShoppingCartRoute";
import { UpdateShoppingCartRoute } from "./express/routes/shoppingCart/updateShoppingCartRoute";
import { CreateShoppingCartRoute } from "./express/routes/shoppingCart/createShoppingCartRoute";
import { ListAllProductsRoute } from "./express/routes/product/list-all.express";

const routes = [
  
  new GetShoppingCartRoute(),
  new UpdateShoppingCartRoute(),
  new CreateShoppingCartRoute(),
   new ListAllProductsRoute(),
  
];

const api = ApiExpress.create(routes);


api.start(Number(process.env.PORT) || 8000);