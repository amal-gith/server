import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Device } from './schemas/device.schema';
import * as mongoose from 'mongoose';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { CreateDeviceDto } from './dto/create-device.dto';

@Injectable()
export class DeviceService {
  constructor(
    @InjectModel(Device.name)
    private deviceModel: mongoose.Model<Device>,
  ) {}

  async findAll(): Promise<Device[]> {
    return await this.deviceModel.find();
  }

  async create(device: CreateDeviceDto): Promise<Device> {
    return await this.deviceModel.create(device);
  }

  async findById(id: string): Promise<Device> {

    const isValidId=mongoose.isValidObjectId(id)
    if (!isValidId) {
      throw new BadRequestException('Please enter correct id ');
    }
   

    const device = await this.deviceModel.findById(id);
    if (!device) {
      throw new NotFoundException('Device Not Found');
    }
    return device;
  }

  async updateById(id: string, device: UpdateDeviceDto): Promise<Device> {
    return await this.deviceModel.findByIdAndUpdate(id, device, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Device> {
    return await this.deviceModel.findByIdAndDelete(id);


  }

}