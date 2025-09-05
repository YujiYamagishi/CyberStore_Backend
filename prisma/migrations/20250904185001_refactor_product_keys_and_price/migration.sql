/*
  Warnings:

  - The primary key for the `ColorsProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `storageOptions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `ColorsProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `storageOptions` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ColorsProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_product" INTEGER NOT NULL,
    "hex_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "ColorsProduct_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ColorsProduct" ("created_at", "hex_code", "id_product", "name", "update_at") SELECT "created_at", "hex_code", "id_product", "name", "update_at" FROM "ColorsProduct";
DROP TABLE "ColorsProduct";
ALTER TABLE "new_ColorsProduct" RENAME TO "ColorsProduct";
CREATE UNIQUE INDEX "ColorsProduct_id_product_hex_code_key" ON "ColorsProduct"("id_product", "hex_code");
CREATE TABLE "new_Products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "discounted_price" DECIMAL,
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
INSERT INTO "new_Products" ("brand", "created_at", "description", "discounted_price", "id", "id_category", "id_specs_smartphone", "name", "price", "stock", "tag", "update_at", "url_image") SELECT "brand", "created_at", "description", "discounted_price", "id", "id_category", "id_specs_smartphone", "name", "price", "stock", "tag", "update_at", "url_image" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
CREATE TABLE "new_storageOptions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_product" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "storageOptions_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_storageOptions" ("created_at", "id_product", "size", "update_at") SELECT "created_at", "id_product", "size", "update_at" FROM "storageOptions";
DROP TABLE "storageOptions";
ALTER TABLE "new_storageOptions" RENAME TO "storageOptions";
CREATE UNIQUE INDEX "storageOptions_id_product_size_key" ON "storageOptions"("id_product", "size");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
