import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Role } from './role.enum';

import { Donations } from '../../donations/entities/donations.entity';

@Entity()
export class Users {
    @PrimaryColumn({ generated: 'increment' })
    id: number;

    @Column('varchar', { length: 255, nullable: false, unique: true })
    email: string;

    @Column('varchar', { length: 255, nullable: false })
    password: string;

    @OneToMany(() => Donations, (donation) => donation.streamer)
    donations: Donations[];

    @CreateDateColumn()
    readonly createdAt: Date;

    @UpdateDateColumn()
    readonly updatedAt: Date;

    @Column({
        type: 'set',
        enum: Role,
    })
    roles: Role[];
}
