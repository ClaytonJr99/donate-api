import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { DonationsService } from './donations.service';
import { Roles } from 'src/auth/constants';
import { Role } from 'src/users/entities/role.enum';

@Controller('donations')
export class DonationsController {
    constructor(private service: DonationsService) {}

    @Roles(Role.User)
    @Post()
    create(@Body() body: CreateDonationDto) {
        return this.service.save(body);
    }

    @Roles(Role.Streamer)
    @Get()
    showAll() {
        return this.service.showAll();
    }
}
