import { Injectable } from '@nestjs/common';
import { KafkaService } from '../kafka/kafka.service';
import { ENUM_USER_TOPICS } from '@app/libs/lib/constants/kafka.topic.constant';
import { CreateUserDto } from '@app/libs/lib/dtos/user/user.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private kafkaClient: KafkaService) {}
  async findUserByUsername(username) {
    return this.kafkaClient.send(ENUM_USER_TOPICS.FIND_USER_BY_USERNAME, {
      username,
    });
  }
  async registerUser(createUserDto: CreateUserDto) {
    return firstValueFrom(
      this.kafkaClient.send(ENUM_USER_TOPICS.CREATE_USER, createUserDto),
    );
  }
}
