import { Inject, Injectable } from '@nestjs/common';
import { KafkaService } from '../kafka/kafka.service';
import { ENUM_AUTH_TOPICS } from '@app/libs/lib/constants/kafka.topic.constant';
import { ClientModuleName } from '@app/libs/lib/constants';

@Injectable()
export class AuthService {
  constructor(
    @Inject(ClientModuleName.AUTH_SERVICE)
    private readonly kafkaClient: KafkaService,
  ) {}
  async signIn(user): Promise<any> {
    return this.kafkaClient.send(ENUM_AUTH_TOPICS.SIGN_IN, user);
  }
}
