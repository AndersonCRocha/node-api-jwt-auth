import { getCustomRepository } from 'typeorm';
import UserAlreadyExistsError from '../../errors/UserAlreadyExistsError';
import User from '../../models/User';
import UserRepository from '../../repositories/UserRepository';

interface Props {
  email: string,
  name: string,
  password: string
}

class CreateUserUseCase {
  async execute({ email, name, password }: Props): Promise<User> {
    const repository = getCustomRepository(UserRepository);

    const userAlreadyExists = await repository.findOne({ where: { email } });

    if (userAlreadyExists) {
      throw new UserAlreadyExistsError(`User already exists with email "${email}."`);
    }

    const user = repository.create({ email, name, password });
    await repository.save(user);

    return user;
  }
}

export default new CreateUserUseCase();
