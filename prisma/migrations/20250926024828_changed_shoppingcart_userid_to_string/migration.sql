-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_shopping_cart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ativo',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_shopping_cart" ("created_at", "id", "status", "updated_at", "user_id") SELECT "created_at", "id", "status", "updated_at", "user_id" FROM "shopping_cart";
DROP TABLE "shopping_cart";
ALTER TABLE "new_shopping_cart" RENAME TO "shopping_cart";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
