import {
  BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn,
} from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  role: string;

  @Column()
  active: boolean;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}

export default User;
