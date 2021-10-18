import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { DonationsRepository } from './donations.repository';
import { StreamersRepository } from 'src/streamers/streamers.repository';
import { hash } from 'bcrypt';

@Injectable()
export class DonationsService {
    constructor(
        private repository: DonationsRepository,
        private streamerdto: StreamersRepository,
    ) {}

    async save(request: CreateDonationDto) {
        const streamerid = request.streamerId;

        const streamer = await this.streamerdto.findOne(streamerid);

        const donation = this.repository.create(request);

        switch (request.paymentType) {
            case 1:
                const userPix = streamer.pix;

                if (userPix == undefined || userPix == null) {
                    throw new BadRequestException(
                        'Pix field is required when payment type pix is selected',
                    );
                }

                donation.pix = await hash(userPix, 6);

                break;
            case 2:
                if (
                    request.cardNumber == undefined ||
                    request.cardNumber == null
                ) {
                    throw new BadRequestException(
                        'Card number is required when payment type credit card is selected',
                    );
                }
                if (
                    request.expirationDate == undefined ||
                    request.expirationDate == null
                ) {
                    throw new BadRequestException(
                        'Expiration date is required when payment type credit card is selected',
                    );
                }
                if (
                    request.securityCode == undefined ||
                    request.securityCode == null
                ) {
                    throw new BadRequestException(
                        'Security code is required when payment type credit card is selected',
                    );
                }
                donation.cardNumber = await hash(request.cardNumber, 6);
                donation.expirationDate = await hash(request.expirationDate, 6);
                donation.securityCode = await hash(request.securityCode, 6);

                break;
        }
        console.log(donation);

        const persistedDonation = await this.repository.save(donation);

        return persistedDonation;
    }

    async showAll() {
        return this.repository.find();
    }
}
