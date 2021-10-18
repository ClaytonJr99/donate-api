import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { Public, Roles } from 'src/auth/constants';
import { Role } from 'src/users/entities/role.enum';
import { CreateStreamerDto } from './dto/create-streamer.dto';
import { StreamersService } from './streamers.service';

@Controller('streamers')
export class StreamersController {
    constructor(private service: StreamersService) {}

    @Public()
    @Post()
    create(@Body() body: CreateStreamerDto) {
        return this.service.save(body);
    }

    @Public()
    @Get()
    showAll() {
        return this.service.showAll();
    }

    @Roles(Role.Streamer)
    @Get(':id')
    show(@Param('id') streamerId: number) {
        return this.service.show(streamerId);
    }

    @Roles(Role.Streamer)
    @Delete(':id')
    destroy(@Param('id') streamerId: number) {
        return this.service.destroy(streamerId);
    }
    @Put(':id')
    update(@Param('id') streamerId: number, @Body() body: CreateStreamerDto) {
        return this.service.update(streamerId, body);
    }
}
