/* The MaintenanceController class is responsible for handling HTTP requests related to maintenance
requests, including creating, updating, and deleting maintenance requests. */
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
@Controller('maintaintance')
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
      body.changeLocation,
      body.targetedSystemFor,
      body.IPaddress,
      body.ImpactedSystemform,
      body.DetailedDescriptionOfChange,
      body.DetailedWorkedPlanTask,
      body.DetailedWorkedPlanStartTime,
      body.DetailedWorkedPlanEndTime,
      body.RequirementTools,
      body.Implementationteam,
      body.Communication,
      body.RollBackPlan,
      body.checklistStatusOne,
      body.checklistStatusTwo,
      body.checklistStatusThree,
      body.checklistStatusFour,
      ////////////////////////////////* part -3 *////////////////////////////////
      body.ImpactedSystemfor,
      body.ActualPriority,
      body.Actualimpactlevel,
      ////////////////////////////////* part -4 *////////////////////////////////
      body.ExecusionTeamMenbers,
      body.ExecusionTeamleaders,
      ////////////////////////////////* part -4 *////////////////////////////////
      body.ChangeReviewForperformed,
      body.ChangeReviewForSuccess,
      body.ActualDowntime,
      body.WorkExecutionStatus,

      body.user,
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
