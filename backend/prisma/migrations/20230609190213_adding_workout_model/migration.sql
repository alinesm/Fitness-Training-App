-- AlterTable
ALTER TABLE "Circuit" ADD COLUMN     "workoutId" TEXT;

-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "workoutId" TEXT;

-- AlterTable
ALTER TABLE "Rest" ADD COLUMN     "workoutId" TEXT;

-- AlterTable
ALTER TABLE "Supertest" ADD COLUMN     "workoutId" TEXT;

-- CreateTable
CREATE TABLE "Workout" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Circuit" ADD CONSTRAINT "Circuit_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supertest" ADD CONSTRAINT "Supertest_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rest" ADD CONSTRAINT "Rest_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE SET NULL ON UPDATE CASCADE;
