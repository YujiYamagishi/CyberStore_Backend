import * as path from "path";

export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CyberBackend API",
      version: "1.0.0",
      description:
        "API for managing products, categories, reviews, brands, and shopping carts in CyberBackend.",
    },
  },
  
  apis: [
    
    path.resolve(__dirname, "../shoppingCart/shoppingCart.yaml"),

    
    path.resolve(__dirname, "./brand/brand.yaml"),
    path.resolve(__dirname, "./category/category.yaml"),
    path.resolve(__dirname, "./product/product.yaml"),
    path.resolve(__dirname, "./review/review.yaml"),
  ],
};