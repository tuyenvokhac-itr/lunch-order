import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../role.enum';
import { IsEmail, IsString, IsStrongPassword } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterUserDto {
  @ApiProperty({ required: true, example: 'Tuyen' })
  @IsString()
  firstName: string;

  @ApiProperty({ required: true, example: 'Vo' })
  @IsString()
  lastName: string;

  @ApiProperty({ required: true, example: 'vo.khactuyen@gmail.com' })
  @Transform(({ value }) => value.toLowerCase())
  @IsEmail()
  email: string;

  @ApiProperty({ required: true, example: 'Cn6$2a' })
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minSymbols: 1,
    minNumbers: 1,
  })
  password: string;

  @ApiProperty({ required: false, default: Role.USER })
  role: Role;
}
