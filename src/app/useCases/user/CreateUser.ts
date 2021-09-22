import { getRepository } from 'typeorm';
import UserAlreadyExistsError from '../../errors/UserAlreadyExistsError';
import User from '../../models/User';

interface Props {
  email: string,
  password: string
}

class CreateUserUseCase {
  async execute({ email, password }: Props): Promise<User> {
    const repository = getRepository(User);

    const userAlreadyExists = await repository.findOne({ where: { email } });

    if (userAlreadyExists) {
      throw new UserAlreadyExistsError(`User already exists with email "${email}"`);
    }

    const user = repository.create({ email, password });
    await repository.save(user);

    return user;
  }
}

export default new CreateUserUseCase();
