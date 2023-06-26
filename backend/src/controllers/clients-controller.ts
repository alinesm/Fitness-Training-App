import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares/authentication-middleware';
import clientsService from '@/services/clients-service';

export async function getListOfClients(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const { userId } = req;
    const result = await clientsService.getListOfClients(userId);
    console.log(result);
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}

export async function deleteClientById(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const { clientId } = req.params;
    const result = await clientsService.deleteClientById(Number(clientId));
    console.log(result);
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}

// export async function deletClientById(req: Request, res: Response, next: NextFunction) {
//   try {
//     const { workoutId } = req.params;
//     const result = await workoutService.deleteWorkoutById(Number(workoutId));
//     console.log(result);
//     return res.status(httpStatus.OK).send(result);
//   } catch (error) {
//     next(error);
//   }
// }
