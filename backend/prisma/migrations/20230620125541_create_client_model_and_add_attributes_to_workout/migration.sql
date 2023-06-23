-- AlterTable
ALTER TABLE "Workout" ADD COLUMN     "clientId" INTEGER,
ADD COLUMN     "frequency" TEXT,
ADD COLUMN     "goal" TEXT,
ADD COLUMN     "lastDone" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "status" TEXT,
    "location" TEXT,
    "goal" TEXT,
    "age" TEXT,
    "weight" TEXT,
    "height" TEXT,
    "gender" TEXT,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
