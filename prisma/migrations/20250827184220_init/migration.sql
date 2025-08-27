-- CreateTable
CREATE TABLE "Produtos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "discounted_price" DECIMAL NOT NULL,
    "stock" INTEGER NOT NULL,
    "url_image" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    "tag" TEXT NOT NULL,
    "id_category" INTEGER NOT NULL,
    "id_specs_smartphone" INTEGER,
    CONSTRAINT "Produtos_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Produtos_id_specs_smartphone_fkey" FOREIGN KEY ("id_specs_smartphone") REFERENCES "SmartphoneSpecs" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ColorsProduct" (
    "id_product" INTEGER NOT NULL,
    "hex_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,

    PRIMARY KEY ("id_product", "hex_code"),
    CONSTRAINT "ColorsProduct_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Produtos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "storageOptions" (
    "id_product" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,

    PRIMARY KEY ("id_product", "size"),
    CONSTRAINT "storageOptions_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Produtos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_product" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "name_user" TEXT NOT NULL,
    "url_image_user" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "Review_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Produtos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SmartphoneSpecs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "screen_size" TEXT NOT NULL,
    "cpu" TEXT NOT NULL,
    "total_cores" TEXT NOT NULL,
    "main_camera" TEXT NOT NULL,
    "front_camera" TEXT NOT NULL,
    "battery" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL
);
