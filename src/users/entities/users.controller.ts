import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService) {}

    @Post()
    create(@Body() body: CreateUserDto) {
        return this.service.save(body);
    }
}
