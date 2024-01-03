import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { User } from './user.entity';

import { AuthService } from './user.auth';
import { ServiceRequestController } from 'src/service-request/service-request.controller';
import { ServiceRequestService } from 'src/service-request/service-request.service';
import { ServiceRequest } from 'src/service-request/service-request.entity';
import { ServiceAuthService } from 'src/service-request/service-request.auth';

@Module({
  imports: [TypeOrmModule.forFeature([User, ServiceRequest])],
  controllers: [UsersController, ServiceRequestController],
  providers: [
    UsersService,
    AuthService,
    ServiceRequestService,
    ServiceAuthService,
  ],
})
export class UsersModule {}
