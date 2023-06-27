import { Router } from 'express';
import { getListOfClients, deleteClientById } from '@/controllers/clients-controller';

const clientsRouter = Router();

clientsRouter.get('/:userId', getListOfClients).delete('/:clientId', deleteClientById);

export { clientsRouter };
