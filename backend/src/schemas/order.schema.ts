import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true }) // adds createdAt & updatedAt automatically
export class Order {
  @Prop({ required: true })
  productId: string; // ID of the product

  @Prop({ required: true })
  userId: string; // reference to the user who placed the order

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  price: number; // price per item or total (depending on design)

  @Prop({ default: 'pending' })
  status: string; // e.g., pending, confirmed, shipped, delivered
}

export const OrderSchema = SchemaFactory.createForClass(Order);
