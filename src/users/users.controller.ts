import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Put,
    Request,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Role } from './entities/role.enum';
import { Public, Roles } from 'src/auth/constants';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService) {}

    @Public()
    @Post()
    create(@Body() body: CreateUserDto) {
        return this.service.saveUser(body);
    }

    @Roles(Role.User)
    @Get()
    showAll() {
        return this.service.showAll();
    }

    @Roles(Role.User)
    @Get(':id')
    show(@Param('id') userId: number) {
        return this.service.show(userId);
    }

    @Roles(Role.User)
    @Delete(':id')
    destroy(@Param('id') userId: number, @Request() request) {
        return this.service.destroy(+userId, +request.user.id);
    }

    @Roles(Role.User)
    @Put(':id')
    update(
        @Body() body: CreateUserDto,
        @Param('id')
        userId: number,
        @Request()
        request,
    ) {
        return this.service.update(+userId, body, +request.user.id);
    }
}
