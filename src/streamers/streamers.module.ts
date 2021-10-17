import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StreamersController } from './entities/streamers.controller';
import { StreamersRepository } from './entities/streamers.repository';
import { StreamersService } from './entities/streamers.service';

@Module({
    imports: [TypeOrmModule.forFeature([StreamersRepository])],
    controllers: [StreamersController],
    providers: [StreamersService],
    exports: [StreamersService],
})
export class StreamersModule {}
