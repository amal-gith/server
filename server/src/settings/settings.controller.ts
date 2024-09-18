import { Body, Controller, Post } from '@nestjs/common';
import { SettingsService } from './settings.service';
import axios from 'axios';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post('encrypt')
  async encryptData(@Body() body: { level: string }) {
    const { level } = body;

    // Chiffrement des données préexistantes sur l'ESP32
    // Vous devez envoyer seulement le niveau de sécurité
    const esp32Url = 'http://192.168.1.14/receive'; // Assurez-vous que l'adresse IP est correcte
    try {
      await axios.post(esp32Url, { level: level });
      return { message: 'Security level successfully sent to ESP32' };
    } catch (error) {
      console.error('Error sending data to ESP32:', error);
      throw new Error('Failed to send security level to ESP32');
    }
  }
}
