
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsIP, IsMACAddress } from 'class-validator';

export enum Typeofdevice {
  Healthcare = 'healthcare',
  Smartagriculture = 'smartagriculture',
  Aquaoptim = 'aquaoptim',
  Industriel = 'industriel',
}

export enum Typeofconnectivity {
  Wifi = 'wifi',
  Bluetooth = 'bluetooth',
  Lora = 'lora',
}

@Schema({
  timestamps: true,
})
export class Device extends Document {
  @Prop()
  id: string;

  @Prop({ required: true })
  typeofconnectivity: Typeofconnectivity;

  @Prop({ required: true })
  typeofdevice: Typeofdevice;

  @Prop({ required: true, unique: true })
  @IsMACAddress()
  macaddress: string;

  @Prop({ required: true, unique: true })
  @IsIP()
  ipaddress: string;

  @Prop({ required: true, unique: true })
  loraaddress: string;

  @Prop({ required: false })
  connect?: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);