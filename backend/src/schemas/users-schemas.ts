import Joi from 'joi';
// import { CreateUserParams } from '@/services/users-service';

// export const createUserSchema = Joi.object<CreateUserParams>({
export const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
