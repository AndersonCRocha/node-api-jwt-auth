import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import CreateUserUseCase from '../useCases/user/CreateUser';

class UserController {
  async list(request: Request, response: Response) {
    const repository = getRepository(User);
    const users = await repository.find();
    return response.send(users);
  }

  async create(request: Request, response: Response) {
    const { email, name, password } = request.body;
    const user = await CreateUserUseCase.execute({ email, name, password });
    Reflect.deleteProperty(user, 'password');
    return response.status(201).send(user);
  }
}

export default new UserController();
