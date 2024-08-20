import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUserCase } from 'src/modules/user/useCases/createUserUseCase';
import { CreateUserBody } from './dtos/createUserBody';
import { UserViewModel } from './viewModel/userViewModel';

@Controller('users')
export class UserController {
  constructor(private createUserUseCase: CreateUserUserCase) {}

  @Post()
  async createPost(@Body() body: CreateUserBody) {
    const { name, email, password } = body;
    const user = await this.createUserUseCase.execute({
      name,
      email,
      password,
    });

    return UserViewModel.toHttp(user);
  }
}
