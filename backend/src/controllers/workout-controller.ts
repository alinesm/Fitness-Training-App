import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import workoutService from '@/services/workout-service';

export async function postWorkout(req: Request, res: Response, next: NextFunction) {
  try {
    // const { userId } = req;
    // const userId = 123;
    const { workout } = req.body;
    console.log(workout[2]);

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
    // const { workoutId } = req.body;
    const workoutId = 25;
    // console.log(workoutId);

    const result = await workoutService.getWorkoutById(workoutId);
    console.log(result);
    return res.status(httpStatus.OK).send({ result });
  } catch (error) {
    next(error);
  }
}
