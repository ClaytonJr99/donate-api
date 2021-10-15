import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(private repository: UsersRepository) {}

    async save(request: CreateUserDto) {
        const user = this.repository.create(request);
        const persistedUser = await this.repository.save(user);

        return persistedUser;
    }
}
