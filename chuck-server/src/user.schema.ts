import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userId: number;

  @Prop()
  value: string;

  @Prop({ type: Date, default: Date.now })
  date: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
