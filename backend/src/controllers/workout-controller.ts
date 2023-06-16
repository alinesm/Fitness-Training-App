import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import workoutService from '@/services/workout-service';

export async function postWorkout(req: Request, res: Response, next: NextFunction) {
  try {
    // const { userId } = req;
    // const userId = 123;
    const { workout } = req.body;
    const result = await workoutService.postWorkout(workout);
    console.log(result);
    return res.status(httpStatus.OK).send({});
  } catch (error) {
    next(error);
  }
}

export async function getWorkoutById(req: Request, res: Response, next: NextFunction) {
  try {
    // const { userId } = req;
    // const userId = 123;
    const { workoutId } = req.params;
    // const workoutId = 25;
    console.log(workoutId);

    const result = await workoutService.getWorkoutById(Number(workoutId));
    console.log(result);
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}

export async function getListOfWorkouts(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await workoutService.getListOfWorkouts();
    console.log(result);
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}
