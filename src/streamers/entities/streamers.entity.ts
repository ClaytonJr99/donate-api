import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Streamers {
    @PrimaryColumn({ generated: 'increment' })
    id: number;

    @Column('varchar', { length: 255, nullable: false, unique: true })
    email: string;

    @Column('varchar', { length: 255, nullable: false })
    password: string;

    @Column('varchar', { length: 255, nullable: false })
    pix: string;

    @Column('varchar', { length: 255, nullable: false })
    agency: string;

    @Column('varchar', { length: 255, nullable: false })
    account: string;

    @Column('varchar', { length: 255, nullable: false })
    channel: string;

    @CreateDateColumn()
    readonly createdAt: Date;

    @UpdateDateColumn()
    readonly updatedAt: Date;
}
