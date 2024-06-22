import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '@app/libs/lib/dtos/user/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async registerUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.registerUser(createUserDto);
  }
}
