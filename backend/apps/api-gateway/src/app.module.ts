import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchandiseModule } from './merchandise/merchandise.module';
import { AuthModule } from './auth/auth.module';
import { KafkaModule } from 'apps/api-gateway/src/kafka/kafka.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MerchandiseModule,
    AuthModule,
    KafkaModule,
    MerchandiseModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
