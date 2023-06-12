/*
  Warnings:

  - The primary key for the `Circuit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Circuit` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Exercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `circuitId` column on the `Exercise` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `id` column on the `Exercise` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `supertestId` column on the `Exercise` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `workoutId` column on the `Exercise` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Supertest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Supertest` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Workout` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Workout` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `exerciseId` on the `Exercise` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_circuitId_fkey";

-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_supertestId_fkey";

-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_workoutId_fkey";

-- AlterTable
ALTER TABLE "Circuit" DROP CONSTRAINT "Circuit_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Circuit_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_pkey",
DROP COLUMN "exerciseId",
ADD COLUMN     "exerciseId" INTEGER NOT NULL,
ALTER COLUMN "text" DROP NOT NULL,
ALTER COLUMN "restSecs" DROP NOT NULL,
DROP COLUMN "circuitId",
ADD COLUMN     "circuitId" INTEGER,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "supertestId",
ADD COLUMN     "supertestId" INTEGER,
DROP COLUMN "workoutId",
ADD COLUMN     "workoutId" INTEGER,
ADD CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Supertest" DROP CONSTRAINT "Supertest_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Supertest_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Workout" DROP CONSTRAINT "Workout_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Workout_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_circuitId_fkey" FOREIGN KEY ("circuitId") REFERENCES "Circuit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_supertestId_fkey" FOREIGN KEY ("supertestId") REFERENCES "Supertest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
