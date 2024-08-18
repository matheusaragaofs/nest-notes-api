import { User } from "../user/entities/User";
import { UserRepository } from "./UserRepository";

export class Database implements UserRepository {
    async create(user: User): Promise<void> {
        console.log('User created')
    }
}   