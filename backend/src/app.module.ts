import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BullModule } from '@nestjs/bull';
import { IngestController } from './ingest.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/xeno'),
    BullModule.forRoot({
      redis: { host: 'localhost', port: 6379 },
    }),
    BullModule.registerQueue({ name: 'ingest' }),
  ],
  controllers: [IngestController],
})
export class AppModule {}
