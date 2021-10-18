import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Role } from './role.enum';

@Entity()
export class Users {
    @PrimaryColumn({ generated: 'increment' })
    id: number;

    @Column('varchar', { length: 255, nullable: false, unique: true })
    email: string;

    @Column('varchar', { length: 255, nullable: false })
    password: string;

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
