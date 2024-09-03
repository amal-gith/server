import { IsOptional, IsString } from 'class-validator';
import { Typeofdevice, Typeofconnectivity } from '../schemas/device.schema';

export class UpdateDeviceDto {

  
  @IsOptional()
  @IsString()
  readonly id: string;
  @IsOptional()
  @IsString()
  readonly typeofconnectivity: Typeofconnectivity;
  @IsOptional()
  @IsString()
  readonly typeofdevice: Typeofdevice;
  @IsOptional()
  @IsString()
  readonly macaddress: string;
  @IsOptional()
  @IsString()
  readonly ipaddress: string;
  @IsOptional()
  @IsString()
  readonly loraaddress: string;
  @IsOptional()
  readonly connect?: string;
}
