// src/settings/settings.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post('encrypt')
  encryptData(@Body() body: { data: string; level: string }) {
    const { data, level } = body;
    const encryptedData = this.settingsService.encrypt(data, level);
    return { encryptedData };
  }

  @Post('decrypt')
  decryptData(@Body() body: { encryptedData: string; level: string }) {
    const { encryptedData, level } = body;
    const decryptedData = this.settingsService.decrypt(encryptedData, level);
    return { decryptedData };
  }
}
