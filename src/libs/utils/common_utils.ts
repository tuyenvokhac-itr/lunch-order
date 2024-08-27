import * as bcrypt from 'bcrypt';

export class CommonUtils {
  static async hashPassword(password_plain): Promise<string> {
    return await bcrypt.hash(
      password_plain,
      parseInt(process.env.BCRYPT_SALT_ROUND),
    );
  }
}
