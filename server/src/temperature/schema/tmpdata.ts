import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'tmp' })
export class Tmp extends Document {
  @Prop({ required: true })
  temperature: number;

  @Prop({ required: true })
  timestamp: number;
}

export const TmpSchema = SchemaFactory.createForClass(Tmp);
