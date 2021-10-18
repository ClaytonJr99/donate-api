import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { DonationsService } from './donations.service';

@Controller('donations')
export class DonationsController {
    constructor(private service: DonationsService) {}

    @Post()
    create(@Body() body: CreateDonationDto) {
        return this.service.save(body);
    }
    @Get()
    showAll() {
        return this.service.showAll();
    }
}
