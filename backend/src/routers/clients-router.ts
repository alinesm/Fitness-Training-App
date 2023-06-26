import { Router } from 'express';
import { getListOfClients, deleteClientById } from '@/controllers/clients-controller';

const clientsRouter = Router();

// usersRouter.post('/', validateBody(createUserSchema), usersPost);
clientsRouter.get('/:userId', getListOfClients).delete('/:clientId', deleteClientById);

export { clientsRouter };
