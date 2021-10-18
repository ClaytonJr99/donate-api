import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import { hash } from 'bcrypt';
import { Role } from './entities/role.enum';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
    constructor(private repository: UsersRepository) {}

    async save(request: Partial<Users>, role: Role) {
        const isDuplicatedEmail = await this.repository.findOne({
            email: request.email,
        });

        if (isDuplicatedEmail) {
            throw new BadRequestException('email already exists');
        }

        const user = this.repository.create(request);
        user.password = await hash(user.password, 6);
        const persistedUser = await this.repository.save({
            ...user,
            roles: [role],
        });
        return persistedUser;
    }

    async saveUser(request: CreateUserDto) {
        const user = await this.save(request, Role.User);
        return user;
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

    async findByEmail(email: string) {
        const user = await this.repository.findOne({ email });
        return user;
    }
}
