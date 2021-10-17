import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService) {}

    @Post()
    create(@Body() body: CreateUserDto) {
        return this.service.save(body);
    }
    @Get()
    showAll() {
        return this.service.showAll();
    }

    @Get(':id')
    show(@Param('id') userId: number) {
        return this.service.show(userId);
    }
    @Delete(':id')
    destroy(@Param('id') userId: number) {
        return this.service.destroy(userId);
    }
    @Put(':id')
    update(
        @Param('id') userId: number,
        @Body('email') userEmail: string,
        @Body('password') userPassword: string,
    ) {
        return this.service.update(userId, userEmail, userPassword);
    }
}
