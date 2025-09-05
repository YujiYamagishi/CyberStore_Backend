export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CyberBackend API",
      version: "1.0.0",
      description: "API for managing products, categories, reviews, and brands in CyberBackend.",
    },
  },
  apis: ["./src/docs/swagger/**/*.yaml"],
};