import { User } from '@prisma/client';
import bcrypt from 'bcrypt';

import userRepository from '../repositories/user-repository';
import { duplicatedEmailError } from '../errors/duplicated-email-error';

export async function createUser({ email, password }: CreateUserParams): Promise<User> {
  await validateUniqueEmailOrFail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.create({
    email,
    password: hashedPassword,
  });
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

export type CreateUserParams = Pick<User, 'email' | 'password'>;

const userService = {
  createUser,
};

export default userService;
