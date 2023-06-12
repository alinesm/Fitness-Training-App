// import { Router } from 'express';

// import { createUserSchema } from '@/schemas';
// import { validateBody } from '@/middlewares';
// import { usersPost } from '@/controllers';

// const usersRouter = Router();

// usersRouter.post('/', validateBody(createUserSchema), usersPost);

// export { usersRouter };

// model user {
//   id             Int              @id @default(autoincrement())
//   email          String           @unique @db.VarChar(255)
//   password       String           @db.VarChar(255)
//   createdAt      DateTime         @default(now()) @db.Date
//   updateAt       DateTime?        @db.Date
//   session        session[]

// }

// model session {
//   id             Int              @id @default(autoincrement())
//   userId         Int
//   token          String
//   createdAt      DateTime         @default(now()) @db.Date
//   updateAt       DateTime?        @db.Date
//   user           user             @relation(fields: [userId], references: [id], onDelete: Cascade)
// }

// model client {
//   id             Int              @id @default(autoincrement())
//   name           String           @db.VarChar
//   email          String           @db.VarChar
//   status         status_type      @default(active)
//   planPrice      Int
//   age            Int
//   height         Int
//   weight         Int
//   goal           String           @db.VarChar
//   frequency      Int
//   gender         String           @db.VarChar
//   createdAt      DateTime         @default(now()) @db.Date
//   updateAt       DateTime?        @db.Date
//   clientProgram  clientProgram[]
//   clientWorkouts clientWorkouts[]
// }

// model clientProgram {
//   id              Int             @id @default(autoincrement())
//   clientId        Int
//   programId       Int
//   current         Boolean
//   startedAt       DateTime        @default(now()) @db.Date
//   finishedAt      DateTime?       @db.Date
//   createdAt       DateTime        @default(now()) @db.Date
//   updateAt        DateTime?       @db.Date
//   client          client          @relation(fields: [clientId], references: [id], onDelete: NoAction, onUpdate: NoAction)
//   trainingProgram trainingProgram @relation(fields: [programId], references: [id], onDelete: NoAction, onUpdate: NoAction)
// }

// model clientWorkouts {
//   id           Int       @id @default(autoincrement())
//   clientId     Int
//   workoutId    Int
//   date         DateTime  @default(now()) @db.Date
//   durationMins Int?
//   createdAt    DateTime  @default(now()) @db.Date
//   updateAt     DateTime? @db.Date
//   client       client    @relation(fields: [clientId], references: [id], onDelete: NoAction, onUpdate: NoAction)
//   workout      workout   @relation(fields: [workoutId], references: [id], onDelete: NoAction, onUpdate: NoAction)
// }

// model programsWorkouts {
//   id              Int             @id @default(autoincrement())
//   programId       Int
//   workoutId       Int
//   createdAt       DateTime        @default(now()) @db.Date
//   updateAt        DateTime?       @db.Date
//   trainingProgram trainingProgram @relation(fields: [programId], references: [id], onDelete: NoAction, onUpdate: NoAction)
//   workout         workout         @relation(fields: [workoutId], references: [id], onDelete: NoAction, onUpdate: NoAction)
// }

// model trainingProgram {
//   id               Int                @id @default(autoincrement())
//   name             String             @db.VarChar
//   durationWeeks    Int
//   summary          String?
//   createdAt        DateTime           @default(now()) @db.Date
//   updateAt         DateTime?          @db.Date
//   clientProgram    clientProgram[]
//   programsWorkouts programsWorkouts[]
// }

// model workout {
//   id               Int                @id @default(autoincrement())
//   name             String             @db.VarChar
//   exerciseId       Int
//   sets             Int
//   text             String?            @db.VarChar
//   restSecs         Int
//   createdAt        DateTime           @default(now()) @db.Date
//   updateAt         DateTime?          @db.Date
//   clientWorkouts   clientWorkouts[]
//   programsWorkouts programsWorkouts[]
// }

// enum status_type {
//   active
//   canceled
// }
