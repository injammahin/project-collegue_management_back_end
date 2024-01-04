// src/service-request.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Employee } from './employee.entity';
import { employeeService } from './employee.service';
import { employeeAuthService } from './employee.auth';
import { employeeDto } from 'src/dto/employee.dto';
@Controller('employee')
export class employeeController {
  constructor(
    private readonly employeeService: employeeService,
    private employeeAuthService: employeeAuthService,
  ) {}

  @Post('/fillup')
  async createUser(@Body() body: employeeDto) {
    const request = await this.employeeAuthService.fillup(
      body.user_id,

      body.employee_name,

      body.designation,

      body.department_id,
    );
    return request;
  }

  // @Get()
  // findAll() {
  //   return this.serviceRequestService.findAll();
  // }
}
