import { Injectable, NotFoundException } from '@nestjs/common';
//import { Tmp } from './schema/tmp.schema';
import { Tmp } from './schema/tmpdata';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TemperatureService {
    constructor(@InjectModel(Tmp.name) private tmpModel: Model<Tmp>) {}

    async findAll(): Promise<Tmp[]> {
        return this.tmpModel.find().exec();
    }

    async findLastValue(): Promise<Tmp> {
        const lastValue = await this.tmpModel.findOne().sort({ timestamp: -1 }).exec();
        
        if (!lastValue) {
            throw new NotFoundException('No temperature data found');
        }
        return lastValue;
    }
}
