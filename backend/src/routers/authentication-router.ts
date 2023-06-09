import { Router } from 'express';
import { validateBody } from '../middlewares';
import { signInSchema } from '../schemas';
import { singInPost } from '../controllers/authentication-controller';

const authenticationRouter = Router();

authenticationRouter.post('/sign-in', validateBody(signInSchema), singInPost);

export { authenticationRouter };
