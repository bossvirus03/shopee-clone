import { Test, TestingModule } from '@nestjs/testing';
import { MerchandiseMicroserviceController } from './merchandise-microservice.controller';
import { MerchandiseMicroserviceService } from './merchandise-microservice.service';

describe('MerchandiseMicroserviceController', () => {
  let merchandiseMicroserviceController: MerchandiseMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MerchandiseMicroserviceController],
      providers: [MerchandiseMicroserviceService],
    }).compile();

    merchandiseMicroserviceController = app.get<MerchandiseMicroserviceController>(MerchandiseMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(merchandiseMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
