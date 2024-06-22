import { Module } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClientModuleName } from '../../../../libs/shared/src/lib/constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientModuleName.GATEWAY_KAFKA,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'api-gateway',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'api-gateway-consumer',
          },
        },
      },
    ]),
  ],
  providers: [KafkaService],
  exports: [KafkaService],
})
export class KafkaModule {}
