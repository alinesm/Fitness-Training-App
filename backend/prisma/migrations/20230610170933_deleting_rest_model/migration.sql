/*
  Warnings:

  - You are about to drop the column `circuitOf` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `circuitOrder` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `workoutId` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `exerciseOrder` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the column `supersetOf` on the `Supertest` table. All the data in the column will be lost.
  - You are about to drop the column `supertestOrder` on the `Supertest` table. All the data in the column will be lost.
  - You are about to drop the column `workoutId` on the `Supertest` table. All the data in the column will be lost.
  - You are about to drop the `Rest` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `rounds` to the `Circuit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workoutOrder` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rounds` to the `Supertest` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Circuit" DROP CONSTRAINT "Circuit_workoutId_fkey";

-- DropForeignKey
ALTER TABLE "Rest" DROP CONSTRAINT "Rest_workoutId_fkey";

-- DropForeignKey
ALTER TABLE "Supertest" DROP CONSTRAINT "Supertest_workoutId_fkey";

-- AlterTable
ALTER TABLE "Circuit" DROP COLUMN "circuitOf",
DROP COLUMN "circuitOrder",
DROP COLUMN "workoutId",
ADD COLUMN     "rounds" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "exerciseOrder",
ADD COLUMN     "workoutOrder" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Supertest" DROP COLUMN "supersetOf",
DROP COLUMN "supertestOrder",
DROP COLUMN "workoutId",
ADD COLUMN     "rounds" TEXT NOT NULL;

-- DropTable
DROP TABLE "Rest";
