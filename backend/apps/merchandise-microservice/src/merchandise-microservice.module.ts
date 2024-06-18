import { Module } from '@nestjs/common';
import { MerchandiseMicroserviceController } from './merchandise-microservice.controller';
import { MerchandiseMicroserviceService } from './merchandise-microservice.service';

@Module({
  imports: [],
  controllers: [MerchandiseMicroserviceController],
  providers: [MerchandiseMicroserviceService],
})
export class MerchandiseMicroserviceModule {}
