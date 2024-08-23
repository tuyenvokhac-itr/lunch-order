import { Injectable } from '@nestjs/common';
import { UserEntity } from './models/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(user: UserEntity): Promise<UserEntity> {
    return this.userRepository.save(user);
  }

  async findOneById(findingId: number): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: { id: findingId },
    });
  }

  async findOneByEmail(findingEmail: string): Promise<UserEntity> {
    console.log(findingEmail);
    return this.userRepository.findOne({
      where: { email: findingEmail },
    });
  }

  async findAll(): Promise<UserEntity[]> {
    // TODO: pagination
    return this.userRepository.find();
  }

  async update(user: UserEntity): Promise<UserEntity> {
    // TODO: validate
    return this.userRepository.save(user);
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
