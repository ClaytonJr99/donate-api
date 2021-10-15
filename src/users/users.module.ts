import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './entities/users.controller';
import { UsersRepository } from './entities/users.repository';
import { UsersService } from './entities/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
