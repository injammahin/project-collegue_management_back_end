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
import { employeeController } from 'src/department/vendor/employee.controller';
import { employeeAuthService } from 'src/department/vendor/employee.auth';
import { employeeService } from 'src/department/vendor/employee.service';
import { Vendor } from 'src/department/vendor/employee.entity';
import { Maintenance } from 'src/maintenance_request_form/maintetance.entity';
import { MaintenanceController } from 'src/maintenance_request_form/maintenance.controller';
import { maintenanceAuthService } from 'src/maintenance_request_form/maintenance.auth';
import { MaintenanceRequestService } from 'src/maintenance_request_form/maintenance.service';
import { RoleController } from './role/role.controller';
import { RoleService } from './role/role.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      ServiceRequest,
      Department,
      Vendor,
      Maintenance,
    ]),
  ],
  controllers: [
    UsersController,
    ServiceRequestController,
    departmentController,
    employeeController,
    MaintenanceController,
    RoleController,
  ],
  providers: [
    UsersService,
    AuthService,
    ServiceRequestService,
    ServiceAuthService,
    departmentService,
    departmentAuthService,
    employeeAuthService,
    employeeService,
    maintenanceAuthService,
    MaintenanceRequestService,
    RoleService,
  ],
})
export class UsersModule {}
