import { Request, Response } from 'express';
import CreateUserUseCase from '../useCases/user/CreateUser';

class UserController {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;
    const user = await CreateUserUseCase.execute({ email, password });
    Reflect.deleteProperty(user, 'password');
    return response.send(user);
  }
}

export default new UserController();
