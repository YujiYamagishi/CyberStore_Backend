// src/infra/api/api.ts

import { ApiExpress } from "./express/api.express";
import { shoppingCartRoutes } from "./express/routes/shoppingCart/shoppingCart.route";

const routes = [
  ...shoppingCartRoutes,
  // aqui você adiciona outras rotas futuramente, ex:
  // ...productRoutes,
  // ...categoryRoutes,
];

const api = ApiExpress.create(routes);

api.start(3000);