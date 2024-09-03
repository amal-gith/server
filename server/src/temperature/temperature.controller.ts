import { Controller, Get, NotFoundException } from '@nestjs/common';
import { Tmp } from './schema/tmpdata';
import { TemperatureService } from './temperature.service';

@Controller('temperature')
export class TemperatureController {
    constructor(private readonly temperatureService: TemperatureService) {}

    @Get('last')
    async findLastValue(): Promise<Tmp> {
        try {
            return await this.temperatureService.findLastValue();
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException(error.message);
            }
            throw error;
        }
    }

    @Get()
    async findAll(): Promise<Tmp[]> {
        return this.temperatureService.findAll();
   
    }}