import { NestFactory } from '@nestjs/core';
import { UserMicroserviceModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(UserMicroserviceModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'user-microservice',
        brokers: ['localhost:29092'],
      },
      consumer: {
        groupId: 'user-microservice-consumer',
      },
    },
  });
  await app.startAllMicroservices();

  await app.init();
}
bootstrap();
