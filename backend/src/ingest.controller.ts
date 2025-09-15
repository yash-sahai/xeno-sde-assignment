import { Body, Controller, Post } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import type { Queue } from 'bull';

@Controller('api/ingest')
export class IngestController {
  constructor(@InjectQueue('ingest') private ingestQueue: Queue) {}

  @Post('customers')
  async ingestCustomers(@Body() body: any) {
    await this.ingestQueue.add('customers', body);
    return { status: 'queued', type: 'customers' };
  }

  @Post('orders')
  async ingestOrders(@Body() body: any) {
    await this.ingestQueue.add('orders', body);
    return { status: 'queued', type: 'orders' };
  }
}
