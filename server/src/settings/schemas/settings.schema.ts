import { Schema } from 'mongoose';

export const SettingsSchema = new Schema({
  securityLevel: { type: String, required: true },
  priorityLevel: { type: String, required: true },
});
