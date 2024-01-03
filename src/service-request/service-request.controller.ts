// src/service-request.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ServiceRequest } from './service-request.entity';
import { ServiceRequestService } from './service-request.service';
import { ServiceAuthService } from './service-request.auth';
import { ServiceRequestDto } from 'src/dto/service-request.dto';
@Controller('service-requests')
export class ServiceRequestController {
  constructor(
    private readonly serviceRequestService: ServiceRequestService,
    private ServiceAuthService: ServiceAuthService,
  ) {}

  @Post('/fillup')
  async createUser(@Body() body: ServiceRequestDto) {
    const request = await this.ServiceAuthService.fillup(
      body.requestNo,

      body.requestedBy,

      body.department,

      body.designation,

      body.date,

      body.requestFor,

      body.employeeId,

      body.reasonOfRequest,

      body.serviceDetails,
    );
    return request;
  }

  // @Get()
  // findAll() {
  //   return this.serviceRequestService.findAll();
  // }
}
