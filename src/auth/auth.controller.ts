import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Public } from './constants';
import { UserEntity } from 'src/users/models/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('register')
  register(@Body() signInDto: UserEntity) {
    return this.authService.register(signInDto);
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
