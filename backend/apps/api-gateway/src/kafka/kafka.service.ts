import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import {
  AllTopics,
  ClientModuleName,
} from '../../../../libs/shared/src/lib/constants';

@Injectable()
export class KafkaService implements OnModuleInit {
  constructor(
    @Inject(ClientModuleName.GATEWAY_KAFKA)
    private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    Object.values(AllTopics).forEach((topic) => {
      this.kafkaClient.subscribeToResponseOf(topic);
    });

    await this.kafkaClient.connect();
  }

  send(topic: string, data, stringify = true) {
    return this.kafkaClient.send(
      topic,
      stringify ? JSON.stringify(data) : data,
    );
  }

  emit<T>(topic: string, data: T, stringify = true) {
    return this.kafkaClient.emit(
      topic,
      stringify ? JSON.stringify(data) : data,
    );
  }
}
