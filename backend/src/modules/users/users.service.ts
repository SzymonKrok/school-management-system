// src/modules/users/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll({ page = 1, limit = 10 }): Promise<[User[], number]> {
    const [data, total] = await this.userRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return [data, total];
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  create(data: Partial<User>): Promise<User> {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    await this.userRepository.update({ id }, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
