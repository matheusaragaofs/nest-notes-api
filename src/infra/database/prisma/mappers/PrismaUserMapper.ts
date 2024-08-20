import { User } from 'src/modules/user/entities/User';
import { User as UserRaw } from '@prisma/client';
export class PrismaUserMapper {
  static toPrisma({ createdAt, email, password, id, name }: User): UserRaw {
    return {
      createdAt,
      email,
      name,
      password,
      id,
    };
  }
}
