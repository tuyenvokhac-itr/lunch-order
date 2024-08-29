import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CommonUtils } from 'src/libs/utils/common_utils';
import { RegisterUserDto } from 'src/users/models/dtos/register_user.dto';
import { UserEntity } from 'src/users/models/entities/user.entity';
import { v4 as uuid } from 'uuid';
import { IResponse, NormalResponse } from 'src/bases/responses/responses';
import { APP_MESSAGE_CODE } from 'src/libs/constants/app_constants';
import { UserDto } from 'src/users/models/dtos/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterUserDto): Promise<IResponse> {
    const hasedPassword = await CommonUtils.hashPassword(registerDto.password);
    const userId = uuid();
    const newUserEntity = UserEntity.fromRegisterDto(
      registerDto,
      userId,
      hasedPassword,
    );

    await this.usersService.create(newUserEntity);

    return new NormalResponse(
      201,
      APP_MESSAGE_CODE.SSO_SUCCESS_201_001,
      UserDto.fromEntity(newUserEntity),
    );
  }

  async signIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByEmail(email);
    console.log(user.hashedPassword);

    if (user?.hashedPassword !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
