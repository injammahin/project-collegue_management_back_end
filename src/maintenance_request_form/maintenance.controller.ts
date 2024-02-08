/* The MaintenanceController class handles HTTP requests related to maintenance requests, including
creating, updating, and deleting maintenance requests. */
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
      ////////////////////////////////* part -1 *////////////////////////////////

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
      ////////////////////////////////* part -2 *////////////////////////////////

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
      ////////////////////////// * for audit purpose *//////////////////////////////////////

      body.user,
    );

    return request;
  }

  /* The `@Get()` decorator is used to specify the HTTP method and route for retrieving all maintenance
 requests. It indicates that this route will handle GET requests without any parameters in the URL. */
  @Get()
  findAll() {
    return this.MaintenanceRequestService.findAll();
  }
  /* The `@Put('/:id')` decorator is used to specify the HTTP method and route for updating a
 maintenance request. It indicates that this route will handle PUT requests with a parameter `id` in
 the URL. */
  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateMaintenanceDto) {
    return this.MaintenanceRequestService.update(parseInt(id), body);
  }

  /* The `@Delete('/:id')` decorator is used to specify the HTTP method and route for deleting a
 maintenance request. It indicates that this route will handle DELETE requests with a parameter `id`
 in the URL. */
  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.MaintenanceRequestService.remove(parseInt(id));
  }
}
