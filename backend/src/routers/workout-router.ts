import { Router } from 'express';
import {
  deleteWorkoutById,
  getListOfWorkouts,
  getListOfWorkoutsByClientId,
  getWorkoutById,
  postWorkout,
  updateWorkoutById,
} from '../controllers/workout-controller';

const workoutsRouter = Router();

// usersRouter.post('/', validateBody(createUserSchema), usersPost);
workoutsRouter
  .post('/:clientId', postWorkout)
  .get('/', getListOfWorkouts)
  .get('/clients/:clientId', getListOfWorkoutsByClientId)
  .get('/:workoutId', getWorkoutById)
  .delete('/:workoutId', deleteWorkoutById);

export { workoutsRouter };
