import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersRepository } from './users.repository';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private repository: UsersRepository) {}
    private data: CreateUserDto;

    async save(request: CreateUserDto) {
        try {
            console.log(request);

            const user = this.repository.create(request);
            user.password = await hash(user.password, 6);
            const persistedUser = await this.repository.save(user);
            return persistedUser;
        } catch (error) {
            console.log(error);
            const isDuplicatedEmail = error.driverError.sqlMessage;
            console.log(isDuplicatedEmail);

            if (isDuplicatedEmail) {
                return isDuplicatedEmail;
            }
            return error;
        }
    }
    async showAll() {
        return this.repository.find();
    }

    async show(id: number) {
        const user = await this.repository.findOne(id);
        if (user) {
            return user;
        }
        throw new NotFoundException();
    }
    async destroy(id: number) {
        const user = await this.repository.findOne(id);
        if (user) {
            return this.repository.remove(user);
        }
        throw new NotFoundException();
    }
    async update(id: number, email: string, password: string) {
        let user = await this.repository.findOne(id);
        const updatedUser = { ...user };
        if (email) {
            updatedUser.email = email;
        }
        if (password) {
            updatedUser.password = await hash(password, 6);
        }
        user = updatedUser;
        user = await this.repository.save(user);
        return user;
    }
    // async verifyEmail(){

    // }
}
