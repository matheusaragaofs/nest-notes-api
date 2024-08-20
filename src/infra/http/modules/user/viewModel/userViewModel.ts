import { User } from 'src/modules/user/entities/User';

export class UserViewModel {
  static toHttp({ id, createdAt, email, name }: User) {
    return {
      id,
      name,
      email,
      createdAt,
    };
  }
}
