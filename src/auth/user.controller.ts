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
  Request,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dto/crete-user.dto';
import { UsersService } from './user.service';
import { AuthService } from './user.auth';
import { LoginUserDto } from '../dto/login-user.dto';

import { UpdateDto } from '../dto/update.dto';
import { Role } from './role.decorator';

@Controller('auth')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('/signout')
  logout() {
    return 'Sign out';
  }

  @Role('admin') // Only admin can access this endpoint
  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(
      body.name,
      body.email,
      body.password,
      body.role,
    );

    return user;
  }

  @Post('/signin')
  async signin(@Body() body: LoginUserDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);

    return user;
  }
  @Role('user')
  @Post('/:id')
  findUser(@Param('id') id: string) {
    return this.usersService.findOne(parseInt(id));
  }
  @Role('user')
  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }
  @Role('user')
  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateDto) {
    return this.usersService.update(parseInt(id), body);
  }
  @Role('user')
  @Get('/profile')
  async profile(@Request() body: any) {
    const user = await this.usersService.find(body.headers.id);

    // console.log(body.headers.id);

    if (!user) {
      return 'failed';
    } else {
      return user;
    }
  }
}
