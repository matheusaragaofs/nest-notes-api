import { Module } from '@nestjs/common';
import { CreateUserUserCase } from 'src/modules/user/useCases/createUserUseCase';
import { DatabaseModule } from 'src/infra/database/database.module';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUserUserCase],  
})
export class UserModule {}
