import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UnauthenticatedError from '../../errors/UnauthenticatedError';
import User from '../../models/User';

interface Props {
  email: string,
  password: string
}

class AuthenticateUserUseCase {
  async execute({ email, password }: Props): Promise<string> {
    const repository = getRepository(User);

    const user = await repository.findOne({ where: { email } });

    if (!user) {
      throw new UnauthenticatedError();
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (!isValidPassword) {
      throw new UnauthenticatedError();
    }

    return jwt.sign({ id: user.id }, String(process.env.JWT_SECRET));
  }
}

export default new AuthenticateUserUseCase();
