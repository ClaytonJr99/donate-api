import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStreamerDto } from '../dto/create-streamer.dto';
import { StreamersRepository } from './streamers.repository';
import { hash } from 'bcrypt';

@Injectable()
export class StreamersService {
    constructor(private repository: StreamersRepository) {}
    private data: CreateStreamerDto;

    async save(request: CreateStreamerDto) {
        try {
            console.log(request);

            const streamer = this.repository.create(request);
            streamer.password = await hash(streamer.password, 6);
            const persistedStreamer = await this.repository.save(streamer);
            return persistedStreamer;
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
    async update(
        id: number,
        email: string,
        password: string,
        pix: string,
        agency: string,
        account: string,
        channel: string,
    ) {
        let streamer = await this.repository.findOne(id);
        const updatedStreamer = { ...streamer };
        if (email) {
            updatedStreamer.email = email;
        }
        if (password) {
            updatedStreamer.password = await hash(password, 6);
        }
        if (pix) {
            updatedStreamer.pix = pix;
        }
        if (agency) {
            updatedStreamer.agency = agency;
        }
        if (account) {
            updatedStreamer.account = account;
        }
        if (channel) {
            updatedStreamer.channel = channel;
        }
        streamer = updatedStreamer;
        streamer = await this.repository.save(streamer);
        return streamer;
    }
    // async verifyEmail(){

    // }
}
