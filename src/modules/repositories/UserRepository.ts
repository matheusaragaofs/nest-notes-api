import { Injectable } from '@nestjs/common';
import { User } from '../user/entities/User';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
}
