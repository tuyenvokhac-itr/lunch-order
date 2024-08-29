import { UserEntity } from '../entities/user.entity';

export class UserDto {
  id: number;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarPath?: string;
  accessToken?: string;
  refreshToken?: string;

  static fromEntity(entity: UserEntity, tokens?: TokensDto): UserDto {
    return {
      id: entity.id,
      userId: entity.userId,
      firstName: entity.firstName,
      lastName: entity.lastName,
      email: entity.email,
      avatarPath: entity.avatarPath,
      accessToken: tokens ? tokens.accessToken : null,
      refreshToken: tokens ? tokens.refreshToken : null,
    };
  }
}

export class TokensDto {
  accessToken: string;
  refreshToken: string;
}
