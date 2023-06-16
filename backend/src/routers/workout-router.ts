import { Router } from 'express';
import { getListOfWorkouts, getWorkoutById, postWorkout } from '@/controllers/workout-controller';

const workoutsRouter = Router();

// usersRouter.post('/', validateBody(createUserSchema), usersPost);
workoutsRouter.post('/', postWorkout).get('/', getListOfWorkouts).get('/:workoutId', getWorkoutById);

export { workoutsRouter };
