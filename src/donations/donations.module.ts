import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonationsController } from './donations.controller';
import { DonationsRepository } from './donations.repository';
import { DonationsService } from './donations.service';
import { StreamersRepository } from 'src/streamers/streamers.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([DonationsRepository, StreamersRepository]),
    ],
    controllers: [DonationsController],
    providers: [DonationsService],
    exports: [DonationsService],
})
export class DonationsModule {}
