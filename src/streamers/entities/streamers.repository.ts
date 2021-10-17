import { Injectable } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { Streamers } from './streamers.entity';

@Injectable()
@EntityRepository(Streamers)
export class StreamersRepository extends Repository<Streamers> {}
