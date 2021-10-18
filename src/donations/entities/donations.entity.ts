import { Streamers } from 'src/streamers/entities/streamers.entity';
import { Users } from 'src/users/entities/users.entity';

import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';

export enum PaymentType {
    PIX = 1,
    CREDIT_CARD,
}

@Entity()
export class Donations {
    @PrimaryColumn({ generated: 'increment' })
    id: number;

    @ManyToOne(() => Streamers, (streamer) => streamer.donations)
    streamer: Streamers;

    @ManyToOne(() => Users, (user) => user.donations)
    user: Streamers;

    @Column('double')
    amount: number;

    @Column('varchar', { length: 255, nullable: true })
    cardNumber?: string;

    @Column('varchar', { length: 255, nullable: true })
    expirationDate?: string;

    @Column('varchar', { length: 255, nullable: true })
    securityCode?: string;

    @Column('varchar', { length: 255, nullable: true })
    pix?: string;

    @Column({
        type: 'enum',
        enum: PaymentType,
    })
    paymentType: PaymentType;

    @CreateDateColumn()
    readonly createdAt: Date;

    @UpdateDateColumn()
    readonly updatedAt: Date;
}
