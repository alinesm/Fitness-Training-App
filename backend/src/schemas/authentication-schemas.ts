import Joi from 'joi';
// import { SignInParams } from '@/services';

// export const signInSchema = Joi.object<SignInParams>({
export const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
