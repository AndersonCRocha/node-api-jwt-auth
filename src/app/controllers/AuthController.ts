import { Request, Response } from 'express';
import AuthenticateUserUseCase from '../useCases/auth/AuthenticateUser';

class AuthController {
  async login(request: Request, response: Response) {
    const { email, password } = request.body;
    const token = await AuthenticateUserUseCase.execute({ email, password });
    return response.json({ token });
  }
}

export default new AuthController();
