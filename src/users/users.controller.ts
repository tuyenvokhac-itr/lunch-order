import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserEntity } from './models/entities/user.entity';

@Controller('user')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  register(@Body() registerDto: UserEntity) {
    try {
      return this.userService.create(registerDto);
    } catch (error) {}
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  getProfile(@Param() params: any) {
    return this.userService.findOneById(params.id);
  }

  @UseGuards(AuthGuard)
  @Get('all')
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(AuthGuard)
  @Put()
  update(@Body() registerDto: UserEntity) {
    return this.userService.update(registerDto);
  }

  @UseGuards(AuthGuard)
  @Post(':id')
  delete(@Param() params: any) {
    return this.userService.delete(params.id);
  }
}
