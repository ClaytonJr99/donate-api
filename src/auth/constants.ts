import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/users/entities/role.enum';

export const jwtConstants = {
    secret: process.env.JWT_SECRET || 'gfjnjknhafsg',
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
