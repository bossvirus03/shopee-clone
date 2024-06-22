import { Module } from '@nestjs/common';
import { UserMicroserviceController } from './app.controller';
import { UserMicroserviceService } from './app.service';
import { PrismaModule } from 'libs/data-access/src/lib/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserMicroserviceController],
  providers: [UserMicroserviceService],
})
export class UserMicroserviceModule {}
