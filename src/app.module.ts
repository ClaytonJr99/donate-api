import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { StreamersModule } from './streamers//streamers.module';
import { DonationsModule } from './donations/donations.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'donate-database',
            entities: [join(__dirname, '**', 'entities', '*.entity.{ts,js}')],
            synchronize: true,
        }),
        UsersModule,
        StreamersModule,
        DonationsModule,
        AuthModule,
    ],
})
export class AppModule {}
