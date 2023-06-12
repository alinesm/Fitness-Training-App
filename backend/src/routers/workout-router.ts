import { Router } from 'express';
import { getWorkoutById, postWorkout } from '@/controllers/workout-controller';

const workoutsRouter = Router();

// usersRouter.post('/', validateBody(createUserSchema), usersPost);
workoutsRouter.post('/', postWorkout).get('/', getWorkoutById);

export { workoutsRouter };
