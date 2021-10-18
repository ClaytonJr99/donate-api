import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
    OneToMany,
    OneToOne,
    JoinColumn,
} from 'typeorm';

import { Donations } from '../../donations/entities/donations.entity';
import { Users } from '../../users/entities/users.entity';

@Entity()
export class Streamers {
    @PrimaryColumn({ generated: 'increment' })
    id: number;

    @OneToOne(() => Users)
    @JoinColumn()
    user: Users;

    @Column('varchar', { length: 255, nullable: false })
    pix: string;

    @Column('varchar', { length: 255, nullable: false })
    agency: string;

    @Column('varchar', { length: 255, nullable: false })
    account: string;

    @Column('varchar', { length: 255, nullable: false })
    channel: string;

    @OneToMany(() => Donations, (donation) => donation.streamer)
    donations: Donations[];

    @CreateDateColumn()
    readonly createdAt: Date;

    @UpdateDateColumn()
    readonly updatedAt: Date;
}
