import { Injectable } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { Users } from './entities/users.entity';

@Injectable()
@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {}
