export class User {
  constructor(object: User, tokens?: any) {
    this.id = object.id;
    this.userId = object.userId;
    this.firstName = object.firstName;
    this.lastName = object.lastName;
    this.email = object.email;
    this.avatarPath = object.avatarPath;
    this.accessToken = tokens !== null ? tokens.access_token : null;
    this.refreshToken = tokens !== null ? tokens.refresh_token : null;
  }
  id: number;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarPath: string;
  accessToken: string;
  refreshToken: string;
}
