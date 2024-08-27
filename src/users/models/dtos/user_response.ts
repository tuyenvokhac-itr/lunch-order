import { UserEntity } from '../entities/user.entity';

export class UserResponse {
  constructor(object: UserResponse, tokens?: any) {
    this.id = object.id;
    this.userId = object.userId;
    this.firstName = object.firstName;
    this.lastName = object.lastName;
    this.email = object.email;
    this.avatarPath = object.avatarPath;
    this.accessToken = tokens !== null ? tokens.access_token : null;
    this.refreshToken = tokens !== null ? tokens.refresh_token : null;
  }

  static fromEntity(entity: UserEntity, tokens: any = null): UserResponse {
    console.log(tokens);
    return new UserResponse({
      id: entity.id,
      userId: entity.userId,
      firstName: entity.firstName,
      lastName: entity.lastName,
      email: entity.email,
      avatarPath: entity.avatarPath,
      accessToken: tokens !== null ? tokens?.access_token : null,
      // refreshToken: tokens?.refresh_token ?? null,
    });
  }

  id: number;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarPath?: string;
  accessToken?: string;
  refreshToken?: string;
}
