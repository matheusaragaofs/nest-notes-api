import { Injectable } from '@nestjs/common';
import { User } from '../entities/User';
import { hash } from 'bcrypt';
import { UserRepository } from '../../../modules/repositories/UserRepository';

interface CreateUserRequest {
  email: string;
  password: string;
  name: string;
}

@Injectable()
export class CreateUserUserCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ name, email, password }: CreateUserRequest) {
    const user = new User({
      name,
      email,
      password: await hash(password, 10),
    });

    await this.userRepository.create(user);
    return user;
  }
}
