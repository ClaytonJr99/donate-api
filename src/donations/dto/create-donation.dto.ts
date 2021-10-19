import { IsNotEmpty, IsNumber, ValidateIf } from 'class-validator';
import { PaymentType } from '../entities/donations.entity';

export class CreateDonationDto {
    @IsNumber()
    amount: number;

    @ValidateIf((type) => type.paymentType == PaymentType.CREDIT_CARD)
    @IsNotEmpty()
    cardNumber?: string;

    @ValidateIf((type) => type.paymentType == PaymentType.CREDIT_CARD)
    @IsNotEmpty()
    expirationDate?: string;

    @ValidateIf((type) => type.paymentType == PaymentType.CREDIT_CARD)
    @IsNotEmpty()
    securityCode?: string;

    @ValidateIf((type) => type.paymentType == PaymentType.PIX)
    @IsNotEmpty()
    pix?: string;

    @IsNotEmpty()
    paymentType: PaymentType;

    @IsNotEmpty()
    streamerId: number;
}
