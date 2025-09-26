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
  // A lista DEVE conter TODOS os arquivos .yaml
  apis: [
    // O caminho para o shoppingCart
    path.resolve(__dirname, "../shoppingCart/shoppingCart.yaml"),

    // Os caminhos para os arquivos originais
    path.resolve(__dirname, "./brand/brand.yaml"),
    path.resolve(__dirname, "./category/category.yaml"),
    path.resolve(__dirname, "./product/product.yaml"),
    path.resolve(__dirname, "./review/review.yaml"),
  ],
};