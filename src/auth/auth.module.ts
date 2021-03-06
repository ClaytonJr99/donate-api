import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { RolesGuard } from './roles.guard';

@Module({
    controllers: [AuthController],
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1d' },
        }),
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        },
    ],
    exports: [AuthService],
})
export class AuthModule {}
