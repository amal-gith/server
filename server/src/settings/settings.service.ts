import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class SettingsService {
  private readonly aes256Algorithm = 'aes-256-cbc'; // Algorithme pour un chiffrement fort
  private readonly aes192Algorithm = 'aes-192-cbc'; // Algorithme pour un chiffrement plus faible
  private readonly key256 = crypto.randomBytes(32); // Clé pour AES-256
  private readonly key192 = crypto.randomBytes(24); // Clé pour AES-192
  private readonly ivLength = 16; // Longueur de l'IV pour AES

  // Chiffrement en fonction du niveau de sécurité
  encrypt(data: string, level: string): string {
    try {
      let algorithm: string;
      let key: Buffer;
      let iv: Buffer;

      switch (level) {
        case 'high':
          algorithm = this.aes256Algorithm;
          key = this.key256;
          break;
        case 'low':
          algorithm = this.aes192Algorithm;
          key = this.key192;
          break;
        case 'none':
        default:
          return data; // Pas de chiffrement
      }

      iv = crypto.randomBytes(this.ivLength); // Générer IV
      const cipher = crypto.createCipheriv(algorithm, key, iv);
      let encrypted = cipher.update(data, 'utf8', 'hex');
      encrypted += cipher.final('hex');
      return `${iv.toString('hex')}:${encrypted}`; // Retourner IV et texte chiffré
    } catch (error) {
      console.error('Encryption error:', error);
      throw new InternalServerErrorException('Encryption failed');
    }
  }

  // Déchiffrement en fonction du niveau de sécurité
  decrypt(encryptedData: string, level: string): string {
    try {
      let algorithm: string;
      let key: Buffer;
      let iv: Buffer;

      switch (level) {
        case 'high':
          algorithm = this.aes256Algorithm;
          key = this.key256;
          break;
        case 'low':
          algorithm = this.aes192Algorithm;
          key = this.key192;
          break;
        case 'none':
        default:
          return encryptedData; // Pas de déchiffrement
      }

      const [ivHex, encrypted] = encryptedData.split(':');
      iv = Buffer.from(ivHex, 'hex'); // IV utilisé pour le déchiffrement

      const decipher = crypto.createDecipheriv(algorithm, key, iv);
      let decrypted = decipher.update(encrypted, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      return decrypted;
    } catch (error) {
      console.error('Decryption error:', error);
      throw new InternalServerErrorException('Decryption failed');
    }
  }
}
