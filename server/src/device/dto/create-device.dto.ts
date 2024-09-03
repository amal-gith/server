import { IsNotEmpty, IsString } from 'class-validator';
import { Typeofdevice, Typeofconnectivity } from '../schemas/device.schema';

export class CreateDeviceDto {

  @IsNotEmpty()
  @IsString()
  readonly id: string;
  
  @IsNotEmpty()
  @IsString()
  readonly typeofconnectivity: Typeofconnectivity;
  
  @IsNotEmpty()
  @IsString()
  readonly typeofdevice: Typeofdevice;
  
  @IsNotEmpty()
  @IsString()
  readonly macaddress: string;
  
  @IsNotEmpty()
  @IsString()
  readonly ipaddress: string;
  
  @IsNotEmpty()
  @IsString()
  readonly loraaddress: string;
  
  @IsNotEmpty()
  readonly connect?: string;
}
