import { Controller } from '@nestjs/common';
import { UserMicroserviceService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ENUM_USER_TOPICS } from '@app/libs/lib/constants/kafka.topic.constant';
import { CreateUserDto } from '@app/libs/lib/dtos/user/user.dto';

@Controller()
export class UserMicroserviceController {
  constructor(
    private readonly userMicroserviceService: UserMicroserviceService,
  ) {}

  @MessagePattern(ENUM_USER_TOPICS.FIND_USER_BY_USERNAME)
  async findUserByUsername(@Payload() username) {
    return this.userMicroserviceService.findUserByUsername(username);
  }

  @MessagePattern(ENUM_USER_TOPICS.CREATE_USER)
  async register(@Payload() user: CreateUserDto) {
    return this.userMicroserviceService.register(user);
  }
}
