import { Controller, Get } from '@nestjs/common';
import { MerchandiseMicroserviceService } from './merchandise-microservice.service';

@Controller()
export class MerchandiseMicroserviceController {
  constructor(private readonly merchandiseMicroserviceService: MerchandiseMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.merchandiseMicroserviceService.getHello();
  }
}
