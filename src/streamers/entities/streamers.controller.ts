import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { CreateStreamerDto } from '../dto/create-streamer.dto';
import { StreamersService } from './streamers.service';

@Controller('streamers')
export class StreamersController {
    constructor(private service: StreamersService) {}

    @Post()
    create(@Body() body: CreateStreamerDto) {
        return this.service.save(body);
    }
    @Get()
    showAll() {
        return this.service.showAll();
    }

    @Get(':id')
    show(@Param('id') streamerId: number) {
        return this.service.show(streamerId);
    }
    @Delete(':id')
    destroy(@Param('id') streamerId: number) {
        return this.service.destroy(streamerId);
    }
    @Put(':id')
    update(
        @Param('id') streamerId: number,
        @Body('email') streamerEmail: string,
        @Body('password') streamerPassword: string,
        @Body('pix') streamerPix: string,
        @Body('agency') streamerAgency: string,
        @Body('account') streamerAccount: string,
        @Body('channel') streamerChannel: string,
    ) {
        return this.service.update(
            streamerId,
            streamerEmail,
            streamerPassword,
            streamerPix,
            streamerAgency,
            streamerAccount,
            streamerChannel,
        );
    }
}
