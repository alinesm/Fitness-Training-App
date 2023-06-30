import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';

import { usersRouter } from './routers/users-router';
import { authenticationRouter } from './routers/authentication-router';
import { connectDb, disconnectDB, loadEnv } from './config';
import { clientsRouter, workoutsRouter } from './routers';
import { handleApplicationErrors } from './middlewares';

// import { clientsRouter, workoutsRouter } from '@/routers';
// import { handleApplicationErrors } from '@/middlewares';

// import { loadEnv, connectDb, disconnectDB } from '@/config';

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/workouts', workoutsRouter)
  .use('/users', usersRouter)
  .use('/clients', clientsRouter)
  .use('/auth', authenticationRouter)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
