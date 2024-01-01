import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Patch,
  Session,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './crete-user.dto';
import { UsersService } from './user.service';
import { AuthService } from './user.auth';
import { LoginUserDto } from './login-user.dto';

import { UpdateDto } from './update.dto';

@Controller('auth')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Get('/profile')
  profile(@Session() session: any) {
    return this.usersService.findOne(session.userId);
  }
  @Post('/signout')
  logout(@Session() session: any) {
    session.userId = null;
  }
  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(
      body.name,
      body.phone,
      body.email,
      body.password,
    );
    session.userId = user.id;
    return user;
  }
  @Post('/signin')
  async signin(@Body() body: LoginUserDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.userId = user.id;
    return 'sign in';
  }
  @Post('/:id')
  findUser(@Param('id') id: string) {
    return this.usersService.findOne(parseInt(id));
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateDto) {
    return this.usersService.update(parseInt(id), body);
  }
}
