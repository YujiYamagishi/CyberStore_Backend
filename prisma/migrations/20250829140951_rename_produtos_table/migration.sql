/*
  Warnings:

  - You are about to drop the `Produtos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Produtos";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Products" (
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
    CONSTRAINT "Products_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Products_id_specs_smartphone_fkey" FOREIGN KEY ("id_specs_smartphone") REFERENCES "SmartphoneSpecs" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ColorsProduct" (
    "id_product" INTEGER NOT NULL,
    "hex_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,

    PRIMARY KEY ("id_product", "hex_code"),
    CONSTRAINT "ColorsProduct_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ColorsProduct" ("created_at", "hex_code", "id_product", "name", "update_at") SELECT "created_at", "hex_code", "id_product", "name", "update_at" FROM "ColorsProduct";
DROP TABLE "ColorsProduct";
ALTER TABLE "new_ColorsProduct" RENAME TO "ColorsProduct";
CREATE TABLE "new_Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_product" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "name_user" TEXT NOT NULL,
    "url_image_user" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "Review_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("created_at", "id", "id_product", "message", "name_user", "rating", "update_at", "url_image_user") SELECT "created_at", "id", "id_product", "message", "name_user", "rating", "update_at", "url_image_user" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
CREATE TABLE "new_storageOptions" (
    "id_product" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,

    PRIMARY KEY ("id_product", "size"),
    CONSTRAINT "storageOptions_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_storageOptions" ("created_at", "id_product", "size", "update_at") SELECT "created_at", "id_product", "size", "update_at" FROM "storageOptions";
DROP TABLE "storageOptions";
ALTER TABLE "new_storageOptions" RENAME TO "storageOptions";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
