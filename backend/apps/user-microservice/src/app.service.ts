import { CreateUserDto } from '@app/libs/lib/dtos/user/user.dto';
import { CustomServiceError } from '@app/libs/lib/errors/custom-service.error';
import { UserServiceError } from '@app/libs/lib/errors/user-microservice';
import { HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'libs/data-access/src/lib/prisma.service';

@Injectable()
export class UserMicroserviceService {
  constructor(private prisma: PrismaService) {}
  async findUserByUsername(username: string) {
    try {
      return this.prisma.credential.findUniqueOrThrow({
        where: {
          username,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code == 'P2025'
      ) {
        throw new CustomServiceError(
          UserServiceError.USER_NOT_FOUND,
          HttpStatus.NOT_FOUND,
        );
      }
    }
  }

  async register(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    try {
      console.log('1111111111');
      const userCredential = await this.prisma.user.create({
        data: {
          email: createUserDto.email,
          name: createUserDto.name,
          phone: createUserDto.phone,
        },
      });
      console.log('2222222222');

      console.log('>>>>', userCredential);
      return await this.prisma.credential.create({
        data: {
          username: createUserDto.username,
          password: createUserDto.password,
          userId: userCredential.id,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code == 'P2002'
      ) {
        throw new CustomServiceError(
          UserServiceError.USER_ALREADY_EXISTS,
          HttpStatus.CONFLICT,
        );
      }
    }
  }
}
