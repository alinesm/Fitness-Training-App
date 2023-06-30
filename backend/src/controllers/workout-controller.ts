import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import workoutService from '../services/workout-service';
import { AuthenticatedRequest } from '../middlewares/authentication-middleware';

export async function postWorkout(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    // const userId = 123;
    const { clientId } = req.params;
    const { workout } = req.body;
    const result = await workoutService.postWorkout(workout, Number(clientId));
    console.log(result);
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}

export async function getWorkoutById(req: Request, res: Response, next: NextFunction) {
  try {
    // const { userId } = req;
    // const userId = 123;
    const { workoutId } = req.params;
    const result = await workoutService.getWorkoutById(Number(workoutId));
    console.log(result);
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}

export async function getListOfWorkoutsByClientId(req: Request, res: Response, next: NextFunction) {
  try {
    const { clientId } = req.params;
    const result = await workoutService.getListOfWorkoutsByClientId(Number(clientId));
    console.log('result', result);
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

export async function deleteWorkoutById(req: Request, res: Response, next: NextFunction) {
  try {
    const { workoutId } = req.params;
    const result = await workoutService.deleteWorkoutById(Number(workoutId));
    console.log(result);
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}

export async function updateWorkoutById(req: Request, res: Response, next: NextFunction) {
  try {
    const { workoutId } = req.params;
    const { workout } = req.body;
    const result = await workoutService.updateWorkoutById(Number(workoutId), workout);
    console.log(result);
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}
