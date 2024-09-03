import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { DeviceService } from './device.service';
import { Device } from './schemas/device.schema';
import { CreateDeviceDto } from './dto/create-device.dto';
//import { UpdateDeviceDto } from './dto/update-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { AuthGuard } from '@nestjs/passport';
@Controller('devices')
export class DeviceController {
  constructor(private deviceService: DeviceService) {}

  @Get()
  async getAllDevices(): Promise<Device[]> {
    return this.deviceService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard())
  async createDevice(
    @Body()
    device: CreateDeviceDto,
  ): Promise<Device> {
    return this.deviceService.create(device);
  }

  @Get(':id')
  async getDevice(
    @Param('id')
    id: string,
  ): Promise<Device> {
    return this.deviceService.findById(id);
  }

  @Put(':id')
  async updateDevice(
    @Param('id') id: string,
    @Body() device: UpdateDeviceDto,
  ): Promise<Device> {
    return this.deviceService.updateById(id, device);
  }


  @Delete(':id')
  async deleteDevice(
    @Param('id')
    id: string,
  ): Promise<Device> {
    return this.deviceService.deleteById(id);
  }








}