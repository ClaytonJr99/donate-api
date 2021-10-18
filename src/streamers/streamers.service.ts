import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStreamerDto } from './dto/create-streamer.dto';
import { StreamersRepository } from './streamers.repository';
import { UsersService } from 'src/users/users.service';
import { Role } from 'src/users/entities/role.enum';

@Injectable()
export class StreamersService {
    constructor(
        private repository: StreamersRepository,
        private userService: UsersService,
    ) {}

    async save(request: CreateStreamerDto) {
        const user = await this.userService.save(
            { email: request.email, password: request.password },
            Role.Streamer,
        );
        const streamer = this.repository.create(request);
        streamer.user = user;

        const persistedStreamer = await this.repository.save(streamer);

        return {
            id: persistedStreamer.id,
            pix: persistedStreamer.pix,
            agency: persistedStreamer.agency,
            account: persistedStreamer.account,
            channel: persistedStreamer.channel,
            createdAt: persistedStreamer.createdAt,
        };
    }

    async showAll() {
        const streamers = await this.repository.find();
        return streamers.map((streamer) => ({
            id: streamer.id,
            channel: streamer.channel,
        }));
    }

    async show(id: number) {
        const streamer = await this.repository.findOne(id);
        if (streamer) {
            return streamer;
        }
        throw new NotFoundException();
    }

    async destroy(id: number) {
        const streamer = await this.repository.findOne(id);
        if (streamer) {
            return this.repository.remove(streamer);
        }
        throw new NotFoundException();
    }

    async update(id: number, request: CreateStreamerDto) {
        let streamer = await this.repository.findOne(id, {
            relations: ['user'],
        });

        streamer.account = request.account;
        streamer.agency = request.agency;
        streamer.channel = request.channel;
        streamer.pix = request.pix;

        streamer = await this.repository.save(streamer);

        await this.userService.update(
            streamer.user.id,
            request.email,
            request.password,
        );

        return streamer;
    }
}
