import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClientModuleName } from '@app/libs/lib/constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientModuleName.AUTH_SERVICE,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'auth',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'auth-consumer',
          },
        },
      },
    ]),
  ],

  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
