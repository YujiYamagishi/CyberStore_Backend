import { ApiExpress } from "./express/api.express";
import { GetShoppingCartRoute } from "./express/routes/shoppingCart/getShoppingCartRoute";
import { UpdateShoppingCartRoute } from "./express/routes/shoppingCart/updateShoppingCartRoute";
import { CreateShoppingCartRoute } from "./express/routes/shoppingCart/createShoppingCartRoute";


const routes = [
  
  new GetShoppingCartRoute(),
  new UpdateShoppingCartRoute(),
  new CreateShoppingCartRoute(),
  
  
];

const api = ApiExpress.create(routes);


api.start(Number(process.env.PORT) || 8000);