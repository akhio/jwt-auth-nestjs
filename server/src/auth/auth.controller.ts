import { Controller, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  login(@Body() body) {
    return this.authService.auth(body.email, body.password);
  }
}