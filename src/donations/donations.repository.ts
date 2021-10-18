import { Injectable } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { Donations } from './entities/donations.entity';

@Injectable()
@EntityRepository(Donations)
export class DonationsRepository extends Repository<Donations> {}
