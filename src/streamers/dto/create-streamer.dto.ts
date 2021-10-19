import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateStreamerDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    pix: string;

    @IsNotEmpty()
    agency: string;

    @IsNotEmpty()
    account: string;

    @IsNotEmpty()
    channel: string;
}
