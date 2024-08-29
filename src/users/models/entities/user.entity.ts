import { Entity, Column } from 'typeorm';
import { Role } from '../role.enum';
import { AbstractCreatedEntity } from 'src/bases/entities/base.entity';
import { ENTITY_NAME } from 'src/libs/constants/app_constants';
import { RegisterUserDto } from '../dtos/register_user.dto';

@Entity(ENTITY_NAME.USER)
export class UserEntity extends AbstractCreatedEntity {
  @Column({
    name: 'user_id',
    type: 'char',
    unique: true,
    nullable: false,
    length: 36,
  })
  userId: string;

  @Column({
    name: 'first_name',
    type: 'varchar',
    nullable: true,
    length: 50,
  })
  firstName?: string;

  @Column({
    name: 'last_name',
    type: 'varchar',
    nullable: true,
    length: 50,
  })
  lastName?: string;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    name: 'hashed_password',
    type: 'varchar',
    length: 60,
    nullable: false,
  })
  hashedPassword: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  @Column({ default: true })
  isActive: boolean;

  @Column({ name: 'avatar_path', type: 'varchar', length: 50, nullable: true })
  avatarPath?: string;

  static fromRegisterDto(
    dto: RegisterUserDto,
    userId: string,
    hashedPassword: string,
  ): UserEntity {
    const entity = new UserEntity();
    entity.userId = userId;
    entity.firstName = dto.firstName;
    entity.lastName = dto.lastName;
    entity.email = dto.email;
    entity.hashedPassword = hashedPassword;
    entity.role = dto.role;
    entity.isActive = true;
    return entity;
  }
}
