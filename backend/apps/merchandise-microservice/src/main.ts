import { NestFactory } from '@nestjs/core';
import { MerchandiseMicroserviceModule } from './merchandise-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(MerchandiseMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
