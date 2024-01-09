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
import { Maintenance } from './maintetance.entity';
import { MaintenanceRequestService } from './maintenance.service';
import { maintenanceAuthService } from './maintenance.auth';
import { MaintenanceDto } from 'src/dto/maintenance.dto';
import { UpdateMaintenanceDto } from 'src/dto/update.maintenance.dto';
@Controller('service-requests')
export class MaintenanceController {
  constructor(
    private readonly MaintenanceRequestService: MaintenanceRequestService,
    private maintenanceAuthService: maintenanceAuthService,
  ) {}

  @Post('/fillup')
  async createUser(@Body() body: MaintenanceDto) {
    const request = await this.maintenanceAuthService.fillup(
      body.requestNumber,

      body.subofChange,

      body.date,

      body.requesterName,

      body.EmployeeId,

      body.department,

      body.contractNo,

      body.MaintenanceType,

      body.purposeOfActivity,

      body.priority,

      body.impactLevel,

      body.requiredDowntime,

      body.mentionDowntime,

      body.startDate,

      body.startTime,

      body.endDate,

      body.endTime,
    );
    return request;
  }

  @Get()
  findAll() {
    return this.MaintenanceRequestService.findAll();
  }
  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateMaintenanceDto) {
    return this.MaintenanceRequestService.update(parseInt(id), body);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.MaintenanceRequestService.remove(parseInt(id));
  }
}
