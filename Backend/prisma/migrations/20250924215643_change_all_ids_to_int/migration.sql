/*
  Warnings:

  - The primary key for the `CashMovement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `CashMovement` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `company_id` on the `CashMovement` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `cash_register_id` on the `CashMovement` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `user_id` on the `CashMovement` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `CashRegister` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `CashRegister` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `company_id` on the `CashRegister` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `user_id` on the `CashRegister` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `Client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Client` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `company_id` on the `Client` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `Company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Company` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `CompanySettings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `CompanySettings` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `company_id` on the `CompanySettings` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `Invoice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `company_id` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `sale_id` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `company_id` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `ProductPrice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `ProductPrice` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `product_id` on the `ProductPrice` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `Sale` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Sale` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `company_id` on the `Sale` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `user_id` on the `Sale` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `client_id` on the `Sale` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `SaleItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `SaleItem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `sale_id` on the `SaleItem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `product_id` on the `SaleItem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `StockMovement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `StockMovement` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `company_id` on the `StockMovement` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `product_id` on the `StockMovement` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `created_by` on the `StockMovement` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `Supplier` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Supplier` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `company_id` on the `Supplier` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `company_id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- DropForeignKey
ALTER TABLE "public"."CashMovement" DROP CONSTRAINT "CashMovement_cash_register_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."CashMovement" DROP CONSTRAINT "CashMovement_company_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."CashMovement" DROP CONSTRAINT "CashMovement_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."CashRegister" DROP CONSTRAINT "CashRegister_company_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."CashRegister" DROP CONSTRAINT "CashRegister_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Client" DROP CONSTRAINT "Client_company_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."CompanySettings" DROP CONSTRAINT "CompanySettings_company_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Invoice" DROP CONSTRAINT "Invoice_company_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Invoice" DROP CONSTRAINT "Invoice_sale_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Product" DROP CONSTRAINT "Product_company_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."ProductPrice" DROP CONSTRAINT "ProductPrice_product_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Sale" DROP CONSTRAINT "Sale_client_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Sale" DROP CONSTRAINT "Sale_company_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Sale" DROP CONSTRAINT "Sale_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."SaleItem" DROP CONSTRAINT "SaleItem_product_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."SaleItem" DROP CONSTRAINT "SaleItem_sale_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."StockMovement" DROP CONSTRAINT "StockMovement_company_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."StockMovement" DROP CONSTRAINT "StockMovement_created_by_fkey";

-- DropForeignKey
ALTER TABLE "public"."StockMovement" DROP CONSTRAINT "StockMovement_product_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Supplier" DROP CONSTRAINT "Supplier_company_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_company_id_fkey";

-- AlterTable
ALTER TABLE "public"."CashMovement" DROP CONSTRAINT "CashMovement_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "company_id" SET DATA TYPE INTEGER,
ALTER COLUMN "cash_register_id" SET DATA TYPE INTEGER,
ALTER COLUMN "user_id" SET DATA TYPE INTEGER,
ADD CONSTRAINT "CashMovement_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."CashRegister" DROP CONSTRAINT "CashRegister_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "company_id" SET DATA TYPE INTEGER,
ALTER COLUMN "user_id" SET DATA TYPE INTEGER,
ADD CONSTRAINT "CashRegister_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Client" DROP CONSTRAINT "Client_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "company_id" SET DATA TYPE INTEGER,
ADD CONSTRAINT "Client_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Company" DROP CONSTRAINT "Company_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ADD CONSTRAINT "Company_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."CompanySettings" DROP CONSTRAINT "CompanySettings_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "company_id" SET DATA TYPE INTEGER,
ADD CONSTRAINT "CompanySettings_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Invoice" DROP CONSTRAINT "Invoice_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "company_id" SET DATA TYPE INTEGER,
ALTER COLUMN "sale_id" SET DATA TYPE INTEGER,
ADD CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Product" DROP CONSTRAINT "Product_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "company_id" SET DATA TYPE INTEGER,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."ProductPrice" DROP CONSTRAINT "ProductPrice_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "product_id" SET DATA TYPE INTEGER,
ADD CONSTRAINT "ProductPrice_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Sale" DROP CONSTRAINT "Sale_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "company_id" SET DATA TYPE INTEGER,
ALTER COLUMN "user_id" SET DATA TYPE INTEGER,
ALTER COLUMN "client_id" SET DATA TYPE INTEGER,
ADD CONSTRAINT "Sale_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."SaleItem" DROP CONSTRAINT "SaleItem_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "sale_id" SET DATA TYPE INTEGER,
ALTER COLUMN "product_id" SET DATA TYPE INTEGER,
ADD CONSTRAINT "SaleItem_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."StockMovement" DROP CONSTRAINT "StockMovement_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "company_id" SET DATA TYPE INTEGER,
ALTER COLUMN "product_id" SET DATA TYPE INTEGER,
ALTER COLUMN "created_by" SET DATA TYPE INTEGER,
ADD CONSTRAINT "StockMovement_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Supplier" DROP CONSTRAINT "Supplier_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "company_id" SET DATA TYPE INTEGER,
ADD CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "company_id" SET DATA TYPE INTEGER,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "public"."CompanySettings" ADD CONSTRAINT "CompanySettings_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Client" ADD CONSTRAINT "Client_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Supplier" ADD CONSTRAINT "Supplier_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductPrice" ADD CONSTRAINT "ProductPrice_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StockMovement" ADD CONSTRAINT "StockMovement_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StockMovement" ADD CONSTRAINT "StockMovement_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StockMovement" ADD CONSTRAINT "StockMovement_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Sale" ADD CONSTRAINT "Sale_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Sale" ADD CONSTRAINT "Sale_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Sale" ADD CONSTRAINT "Sale_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "public"."Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SaleItem" ADD CONSTRAINT "SaleItem_sale_id_fkey" FOREIGN KEY ("sale_id") REFERENCES "public"."Sale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SaleItem" ADD CONSTRAINT "SaleItem_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Invoice" ADD CONSTRAINT "Invoice_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Invoice" ADD CONSTRAINT "Invoice_sale_id_fkey" FOREIGN KEY ("sale_id") REFERENCES "public"."Sale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CashRegister" ADD CONSTRAINT "CashRegister_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CashRegister" ADD CONSTRAINT "CashRegister_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CashMovement" ADD CONSTRAINT "CashMovement_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CashMovement" ADD CONSTRAINT "CashMovement_cash_register_id_fkey" FOREIGN KEY ("cash_register_id") REFERENCES "public"."CashRegister"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CashMovement" ADD CONSTRAINT "CashMovement_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
