-- CreateEnum
CREATE TYPE "status_type" AS ENUM ('active', 'canceled');

-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "status" "status_type" NOT NULL DEFAULT E'active',
    "planPrice" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "goal" VARCHAR NOT NULL,
    "frequency" INTEGER NOT NULL,
    "gender" VARCHAR NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATE,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientProgram" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "programId" INTEGER NOT NULL,
    "current" BOOLEAN NOT NULL,
    "startedAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt" DATE,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATE,

    CONSTRAINT "clientProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientWorkouts" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "workoutId" INTEGER NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "durationMins" INTEGER,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATE,

    CONSTRAINT "clientWorkouts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "programsWorkouts" (
    "id" SERIAL NOT NULL,
    "programId" INTEGER NOT NULL,
    "workoutId" INTEGER NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATE,

    CONSTRAINT "programsWorkouts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trainingProgram" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "durationWeeks" INTEGER NOT NULL,
    "summary" TEXT,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATE,

    CONSTRAINT "trainingProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workout" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "exerciseId" INTEGER NOT NULL,
    "sets" INTEGER NOT NULL,
    "text" VARCHAR,
    "restSecs" INTEGER NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATE,

    CONSTRAINT "workout_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "clientProgram" ADD CONSTRAINT "clientProgram_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "clientProgram" ADD CONSTRAINT "clientProgram_programId_fkey" FOREIGN KEY ("programId") REFERENCES "trainingProgram"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "clientWorkouts" ADD CONSTRAINT "clientWorkouts_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "clientWorkouts" ADD CONSTRAINT "clientWorkouts_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "workout"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "programsWorkouts" ADD CONSTRAINT "programsWorkouts_programId_fkey" FOREIGN KEY ("programId") REFERENCES "trainingProgram"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "programsWorkouts" ADD CONSTRAINT "programsWorkouts_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "workout"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
