import { Injectable } from '@nestjs/common';

@Injectable()
export class MerchandiseMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
