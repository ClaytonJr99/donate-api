import { IsNotEmpty } from 'class-validator';

export class CreateStreamerDto {
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}
