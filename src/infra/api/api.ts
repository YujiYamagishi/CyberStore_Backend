import { ApiExpress } from "./express/api.express";


import { 
    GetShoppingCartRoute, 
    UpdateShoppingCartRoute, 
    CreateShoppingCartRoute 
} from "./express/routes/shoppingCart"; 

const routes = [
  
  new GetShoppingCartRoute(),
  new UpdateShoppingCartRoute(),
  new CreateShoppingCartRoute(),
  
  
];

const api = ApiExpress.create(routes);


api.start(process.env.PORT || 8000);