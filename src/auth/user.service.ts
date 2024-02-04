import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(
    name: string,
    email: string,
    password: string,
    user_id,
    employee_name: string,
    designation: string,
    department_id: string,
    role: string = 'user',
  ) {
    const user = this.repo.create({
      name,
      role,
      email,
      password,
      user_id,
      employee_name,
      designation,
      department_id,
    });

    return this.repo.save(user);
  }
  //
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }
  async find(email: string) {
    return this.repo.findOne({
      where: { email },
      relations: ['serviceRequests', 'maintenances', 'employees', 'department'],
    });
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }
}
