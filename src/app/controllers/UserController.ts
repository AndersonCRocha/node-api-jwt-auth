import { Request, Response } from 'express';
import CreateUserUseCase from '../useCases/user/CreateUser';

class UserController {
  async create(request: Request, response: Response) {
    await CreateUserUseCase.execute(request.body);
    return response.send(request.body);
  }
}

export default new UserController();
