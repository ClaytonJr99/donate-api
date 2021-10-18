import { IsNotEmpty } from 'class-validator';
import { PaymentType } from '../entities/donations.entity';

export class CreateDonationDto {
    @IsNotEmpty()
    amount: number;

    cardNumber?: string;

    expirationDate?: string;

    securityCode?: string;

    pix?: string;

    @IsNotEmpty()
    paymentType: PaymentType;

    @IsNotEmpty()
    streamerId: number;

    @IsNotEmpty()
    userId: number;
}
