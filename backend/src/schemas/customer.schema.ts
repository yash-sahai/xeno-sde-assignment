import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop({ required: true })
  customerId: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop({ default: 0 })
  totalSpend: number;

  @Prop({ default: 0 })
  visits: number;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
