/*
  Warnings:

  - You are about to drop the `client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `clientProgram` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `clientWorkouts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `programsWorkouts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `trainingProgram` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `workout` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "clientProgram" DROP CONSTRAINT "clientProgram_clientId_fkey";

-- DropForeignKey
ALTER TABLE "clientProgram" DROP CONSTRAINT "clientProgram_programId_fkey";

-- DropForeignKey
ALTER TABLE "clientWorkouts" DROP CONSTRAINT "clientWorkouts_clientId_fkey";

-- DropForeignKey
ALTER TABLE "clientWorkouts" DROP CONSTRAINT "clientWorkouts_workoutId_fkey";

-- DropForeignKey
ALTER TABLE "programsWorkouts" DROP CONSTRAINT "programsWorkouts_programId_fkey";

-- DropForeignKey
ALTER TABLE "programsWorkouts" DROP CONSTRAINT "programsWorkouts_workoutId_fkey";

-- DropForeignKey
ALTER TABLE "session" DROP CONSTRAINT "session_userId_fkey";

-- DropTable
DROP TABLE "client";

-- DropTable
DROP TABLE "clientProgram";

-- DropTable
DROP TABLE "clientWorkouts";

-- DropTable
DROP TABLE "programsWorkouts";

-- DropTable
DROP TABLE "session";

-- DropTable
DROP TABLE "trainingProgram";

-- DropTable
DROP TABLE "user";

-- DropTable
DROP TABLE "workout";

-- DropEnum
DROP TYPE "status_type";

-- CreateTable
CREATE TABLE "Exercise" (
    "exerciseId" TEXT NOT NULL,
    "exerciseGift" TEXT NOT NULL,
    "exerciseName" TEXT NOT NULL,
    "sets" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "restSecs" TEXT NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("exerciseId")
);

-- CreateTable
CREATE TABLE "Supertest" (
    "supertestId" TEXT NOT NULL,
    "supersetOf" TEXT NOT NULL,

    CONSTRAINT "Supertest_pkey" PRIMARY KEY ("supertestId")
);

-- CreateTable
CREATE TABLE "Circuit" (
    "circuitId" TEXT NOT NULL,
    "circuitOf" TEXT NOT NULL,

    CONSTRAINT "Circuit_pkey" PRIMARY KEY ("circuitId")
);

-- CreateTable
CREATE TABLE "Rest" (
    "restId" TEXT NOT NULL,
    "rest" TEXT NOT NULL,

    CONSTRAINT "Rest_pkey" PRIMARY KEY ("restId")
);

-- CreateTable
CREATE TABLE "WorkoutData" (
    "workoutDataId" TEXT NOT NULL,
    "exerciseExerciseId" TEXT NOT NULL,

    CONSTRAINT "WorkoutData_pkey" PRIMARY KEY ("workoutDataId")
);

-- CreateTable
CREATE TABLE "_SupertestWorkoutData" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CircuitWorkoutData" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_RestWorkoutData" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SupertestWorkoutData_AB_unique" ON "_SupertestWorkoutData"("A", "B");

-- CreateIndex
CREATE INDEX "_SupertestWorkoutData_B_index" ON "_SupertestWorkoutData"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CircuitWorkoutData_AB_unique" ON "_CircuitWorkoutData"("A", "B");

-- CreateIndex
CREATE INDEX "_CircuitWorkoutData_B_index" ON "_CircuitWorkoutData"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RestWorkoutData_AB_unique" ON "_RestWorkoutData"("A", "B");

-- CreateIndex
CREATE INDEX "_RestWorkoutData_B_index" ON "_RestWorkoutData"("B");

-- AddForeignKey
ALTER TABLE "Supertest" ADD CONSTRAINT "Supertest_supersetOf_fkey" FOREIGN KEY ("supersetOf") REFERENCES "Exercise"("exerciseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Circuit" ADD CONSTRAINT "Circuit_circuitOf_fkey" FOREIGN KEY ("circuitOf") REFERENCES "Exercise"("exerciseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutData" ADD CONSTRAINT "WorkoutData_exerciseExerciseId_fkey" FOREIGN KEY ("exerciseExerciseId") REFERENCES "Exercise"("exerciseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SupertestWorkoutData" ADD CONSTRAINT "_SupertestWorkoutData_A_fkey" FOREIGN KEY ("A") REFERENCES "Supertest"("supertestId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SupertestWorkoutData" ADD CONSTRAINT "_SupertestWorkoutData_B_fkey" FOREIGN KEY ("B") REFERENCES "WorkoutData"("workoutDataId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CircuitWorkoutData" ADD CONSTRAINT "_CircuitWorkoutData_A_fkey" FOREIGN KEY ("A") REFERENCES "Circuit"("circuitId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CircuitWorkoutData" ADD CONSTRAINT "_CircuitWorkoutData_B_fkey" FOREIGN KEY ("B") REFERENCES "WorkoutData"("workoutDataId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RestWorkoutData" ADD CONSTRAINT "_RestWorkoutData_A_fkey" FOREIGN KEY ("A") REFERENCES "Rest"("restId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RestWorkoutData" ADD CONSTRAINT "_RestWorkoutData_B_fkey" FOREIGN KEY ("B") REFERENCES "WorkoutData"("workoutDataId") ON DELETE CASCADE ON UPDATE CASCADE;
