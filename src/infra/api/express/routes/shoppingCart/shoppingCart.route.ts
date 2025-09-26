// shoppingCart.route.ts
import { Route } from "../route";
import { CreateShoppingCartRoute } from "./createShoppingCartRoute";
import { GetShoppingCartRoute } from "./getShoppingCartRoute";
import { UpdateShoppingCartRoute } from "./updateShoppingCartRoute";

export const shoppingCartRoutes: Route[] = [
  new CreateShoppingCartRoute(),
  new GetShoppingCartRoute(),
  new UpdateShoppingCartRoute(),
];
