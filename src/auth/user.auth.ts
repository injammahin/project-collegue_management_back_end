// src/auth/auth.service.ts

import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(
    name: string,
    email: string,
    password: string,
    role: string = '',
  ) {
    // See if email is in use
    const users = await this.usersService.find(email);
    if (users) {
      throw new BadRequestException('Email is already used');
    }

    // Only allow 'admin' role to sign up
    if (role !== 'admin') {
      throw new BadRequestException('Invalid role for sign up');
    }

    const user = await this.usersService.create(name, email, password, role);

    // Return the user
    return user;
  }

  async signin(email: string, password: string) {
    const user = await this.usersService.find(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user.password !== password) {
      throw new BadRequestException('Bad password');
    }

    return user;
  }
}
