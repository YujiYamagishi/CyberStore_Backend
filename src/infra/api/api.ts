import { ApiExpress } from "./express/api.express";
import { shoppingCartRoutes } from "./express/routes/shoppingCart/shoppingCart.route";

const routes = [
  ...shoppingCartRoutes,
 
];

const api = ApiExpress.create(routes);

api.start(3000);