import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  async signIn(user): Promise<any> {
    return this.authService.signIn(user);
  }
}
