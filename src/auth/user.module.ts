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
import { departmentController } from 'src/department/department_information/department.controller';
import { departmentService } from 'src/department/department_information/department.service';
import { departmentAuthService } from 'src/department/department_information/department.auth';
import { Department } from 'src/department/department_information/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, ServiceRequest, Department])],
  controllers: [
    UsersController,
    ServiceRequestController,
    departmentController,
  ],
  providers: [
    UsersService,
    AuthService,
    ServiceRequestService,
    ServiceAuthService,
    departmentService,
    departmentAuthService,
  ],
})
export class UsersModule {}
