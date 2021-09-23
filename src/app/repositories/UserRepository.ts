import { EntityRepository, Repository } from 'typeorm';
import User from '../models/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  async findForLogin(email: string) {
    return this.createQueryBuilder('users')
      .addSelect('users.password')
      .where({ email })
      .getOne();
  }
}

export default UserRepository;
