// src/service-request.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ServiceRequest } from './service-request.entity';
import { ServiceRequestService } from './service-request.service';
import { ServiceAuthService } from './service-request.auth';
import { ServiceRequestDto } from 'src/dto/service-request.dto';
import { UpdateRequestDto } from 'src/dto/update-request.dto';
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
  @Get()
  findAll() {
    return this.serviceRequestService.findAll();
  }
  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateRequestDto) {
    return this.serviceRequestService.update(parseInt(id), body);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.serviceRequestService.remove(parseInt(id));
  }
}
