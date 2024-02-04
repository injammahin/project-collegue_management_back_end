// src/service-request.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Department } from './department.entity';
import { departmentService } from './department.service';
import { departmentAuthService } from './department.auth';
import { departmentDto } from 'src/dto/department.dto';
@Controller('department_information')
export class departmentController {
  constructor(
    private readonly departmentService: departmentService,
    private departmentAuthService: departmentAuthService,
  ) {}

  @Post('/fillup')
  async createUser(@Body() body: departmentDto) {
    const request = await this.departmentAuthService.fillup(
      body.manager_id,

      body.department_name,
    );
    return request;
  }

  // @Get()
  // findAll() {
  //   return this.serviceRequestService.findAll();
  // }
}
