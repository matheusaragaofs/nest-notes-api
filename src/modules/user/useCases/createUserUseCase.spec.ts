import { compare } from 'bcrypt';
import { UserRepositoryInMemory } from '../../repositories/UserRepositoryInMemory';
import { CreateUserUserCase } from './createUserUseCase';

let createUserUseCase: CreateUserUserCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe('Create User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUserCase(userRepositoryInMemory);
  });

  it('Should be able to create user', async () => {
    expect(userRepositoryInMemory.users.length).toBe(0);

    const user = await createUserUseCase.execute({
      name: 'matheus',
      email: 'test@email.com',
      password: '123456',
    });
    expect(userRepositoryInMemory.users).toEqual([user]);
  });

  it('Should be to create user with password encrypted', async () => {
    const userPasswordWithoutHash = '123456';

    const user = await createUserUseCase.execute({
      name: 'matheus',
      email: 'test@email.com',
      password: userPasswordWithoutHash,
    });

    const userHasPasswordEncrypted = await compare(
      userPasswordWithoutHash,
      user.password,
    );

    expect(userHasPasswordEncrypted).toBe(true);
  });
});
