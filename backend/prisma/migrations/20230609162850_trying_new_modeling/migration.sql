/*
  Warnings:

  - The primary key for the `Circuit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `circuitId` on the `Circuit` table. All the data in the column will be lost.
  - The primary key for the `Exercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Rest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `restId` on the `Rest` table. All the data in the column will be lost.
  - The primary key for the `Supertest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `supertestId` on the `Supertest` table. All the data in the column will be lost.
  - You are about to drop the `WorkoutData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CircuitWorkoutData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RestWorkoutData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_SupertestWorkoutData` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `circuitOrder` to the `Circuit` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Circuit` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `exerciseOrder` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Exercise` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Rest` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `restOrder` to the `Rest` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Supertest` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `supertestOrder` to the `Supertest` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Circuit" DROP CONSTRAINT "Circuit_circuitOf_fkey";

-- DropForeignKey
ALTER TABLE "Supertest" DROP CONSTRAINT "Supertest_supersetOf_fkey";

-- DropForeignKey
ALTER TABLE "WorkoutData" DROP CONSTRAINT "WorkoutData_exerciseExerciseId_fkey";

-- DropForeignKey
ALTER TABLE "_CircuitWorkoutData" DROP CONSTRAINT "_CircuitWorkoutData_A_fkey";

-- DropForeignKey
ALTER TABLE "_CircuitWorkoutData" DROP CONSTRAINT "_CircuitWorkoutData_B_fkey";

-- DropForeignKey
ALTER TABLE "_RestWorkoutData" DROP CONSTRAINT "_RestWorkoutData_A_fkey";

-- DropForeignKey
ALTER TABLE "_RestWorkoutData" DROP CONSTRAINT "_RestWorkoutData_B_fkey";

-- DropForeignKey
ALTER TABLE "_SupertestWorkoutData" DROP CONSTRAINT "_SupertestWorkoutData_A_fkey";

-- DropForeignKey
ALTER TABLE "_SupertestWorkoutData" DROP CONSTRAINT "_SupertestWorkoutData_B_fkey";

-- AlterTable
ALTER TABLE "Circuit" DROP CONSTRAINT "Circuit_pkey",
DROP COLUMN "circuitId",
ADD COLUMN     "circuitOrder" INTEGER NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Circuit_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_pkey",
ADD COLUMN     "circuitId" TEXT,
ADD COLUMN     "exerciseOrder" INTEGER NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "supertestId" TEXT,
ALTER COLUMN "sets" DROP NOT NULL,
ADD CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Rest" DROP CONSTRAINT "Rest_pkey",
DROP COLUMN "restId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "restOrder" INTEGER NOT NULL,
ADD CONSTRAINT "Rest_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Supertest" DROP CONSTRAINT "Supertest_pkey",
DROP COLUMN "supertestId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "supertestOrder" INTEGER NOT NULL,
ADD CONSTRAINT "Supertest_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "WorkoutData";

-- DropTable
DROP TABLE "_CircuitWorkoutData";

-- DropTable
DROP TABLE "_RestWorkoutData";

-- DropTable
DROP TABLE "_SupertestWorkoutData";

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_circuitId_fkey" FOREIGN KEY ("circuitId") REFERENCES "Circuit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_supertestId_fkey" FOREIGN KEY ("supertestId") REFERENCES "Supertest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
