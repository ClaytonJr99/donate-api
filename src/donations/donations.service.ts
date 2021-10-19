import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { DonationsRepository } from './donations.repository';
import { StreamersRepository } from 'src/streamers/streamers.repository';
import { hash } from 'bcrypt';
import { PaymentType } from './entities/donations.entity';

@Injectable()
export class DonationsService {
    constructor(
        private repository: DonationsRepository,
        private streamerdto: StreamersRepository,
    ) {}

    async save(request: CreateDonationDto) {
        const streamerid = request.streamerId;

        const streamer = await this.streamerdto.findOne(streamerid);

        let donation = this.repository.create(request);

        if (request.paymentType == PaymentType.CREDIT_CARD) {
            donation.cardNumber = await hash(request.cardNumber, 6);
            donation.expirationDate = await hash(request.expirationDate, 6);
            donation.securityCode = await hash(request.securityCode, 6);
        } else {
            donation.pix = await hash(request.pix, 6);
        }

        donation.paymentType = request.paymentType;

        if (!streamer) {
            throw new BadRequestException('Streamer not found');
        }

        donation.streamer = streamer;

        donation = await this.repository.save(donation);

        return donation;
    }

    async showAll() {
        return this.repository.find();
    }
}
