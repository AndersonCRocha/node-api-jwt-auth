import { getCustomRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UnauthenticatedError from '../../errors/UnauthenticatedError';
import UserRepository from '../../repositories/UserRepository';

interface Props {
  email: string,
  password: string
}

interface AuthResponse {
  accessToken: string;
  accessTokenExpiration: number;
  tokenType: string;
}

class AuthenticateUserUseCase {
  async execute({ email, password }: Props): Promise<AuthResponse> {
    const repository = getCustomRepository(UserRepository);

    const user = await repository.findForLogin(email);

    if (!user) {
      throw new UnauthenticatedError();
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (!isValidPassword) {
      throw new UnauthenticatedError();
    }

    const accessTokenExpiration = Math.floor(Date.now() / 1000) + (60 * 60);
    const accessToken = jwt.sign(
      { sub: user.id },
      String(process.env.JWT_SECRET),
      { expiresIn: '1h' },
    );

    return {
      accessToken,
      accessTokenExpiration,
      tokenType: 'Bearer',
    };
  }
}

export default new AuthenticateUserUseCase();
