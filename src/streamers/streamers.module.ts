import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { UsersRepository } from 'src/users/users.repository';
import { StreamersController } from './streamers.controller';
import { StreamersRepository } from './streamers.repository';
import { StreamersService } from './streamers.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([StreamersRepository]),
        UsersModule,
        UsersRepository,
    ],
    controllers: [StreamersController],
    providers: [StreamersService],
    exports: [StreamersService],
})
export class StreamersModule {}
