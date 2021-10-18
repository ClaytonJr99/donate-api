import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async validate(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);
        if (user && (await compare(password, user.password))) {
            return user;
        }
        return null;
    }

    async login({ id, roles }) {
        return {
            access_token: this.jwtService.sign({ id, roles }),
        };
    }
}
