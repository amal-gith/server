import { Document } from 'mongoose';

export interface Settings extends Document {
  readonly securityLevel: string;
  readonly priorityLevel: string;
}
