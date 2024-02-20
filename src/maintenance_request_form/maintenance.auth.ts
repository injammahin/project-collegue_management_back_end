/* The `maintenanceAuthService` class handles authentication and creates maintenance service requests. */
/* The `maintenanceAuthService` class is responsible for handling authentication and creating
maintenance service requests. */
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { MaintenanceRequestService } from './maintenance.service';
import { User } from 'src/auth/user.entity';
@Injectable()
export class maintenanceAuthService {
  constructor(private MaintenanceRequestService: MaintenanceRequestService) {}
  async fillup(
    requestNumber: string,

    subofChange: string,
    requestedBy: string,
    date: string,

    requesterName: string,

    EmployeeId: string,

    department: string,

    contractNo: string,

    MaintenanceType: string,

    purposeOfActivity: string,
    referenceServiceRequest: string,

    priority: string,

    impactLevel: string,
    requiredDowntime: string,

    mentionDowntime: string,

    startDate: string,

    startTime: string,

    endDate: string,

    endTime: string,
    ////////////////////////////////* part -2 *////////////////////////////////
    changeLocation: string,
    targetedSystemFor: string,
    IPaddress: string,
    ImpactedSystemform: string,
    DetailedDescriptionOfChange: string,
    DetailedWorkedPlanTask: string,
    DetailedWorkedPlanStartTime: string,
    DetailedWorkedPlanEndTime: string,
    RequirementTools: string,
    Implementationteam: string,
    Communication: string,
    RollBackPlan: string,
    checklistStatusOne: string,
    checklistStatusTwo: string,
    checklistStatusThree: string,
    checklistStatusFour: string,
    ////////////////////////////////* part -3 *////////////////////////////////
    ImpactedSystemfor: string,
    ActualPriority: string,
    Actualimpactlevel: string,
    ////////////////////////////////* part -4 *////////////////////////////////
    ExecusionTeamMenbers: string,
    ExecusionTeamleaders: string,
    ////////////////////////////////* part -5 *////////////////////////////////
    ChangeReviewForperformed: string,
    ChangeReviewForSuccess: string,
    ActualDowntime: string,
    WorkExecutionStatus: string,
    /////////////////////////////////////

    user: string,
  ) {
    const ServiceRequest = await this.MaintenanceRequestService.create(
      requestNumber,

      subofChange,

      date,
      requestedBy,
      requesterName,

      EmployeeId,

      department,

      contractNo,

      MaintenanceType,

      purposeOfActivity,
      referenceServiceRequest,

      priority,

      impactLevel,

      requiredDowntime,

      mentionDowntime,

      startDate,

      startTime,

      endDate,

      endTime,
      ////////////////////////////////* part -2 *////////////////////////////////
      changeLocation,
      targetedSystemFor,
      IPaddress,
      ImpactedSystemform,
      DetailedDescriptionOfChange,
      DetailedWorkedPlanTask,
      DetailedWorkedPlanStartTime,
      DetailedWorkedPlanEndTime,
      RequirementTools,
      Implementationteam,
      Communication,
      RollBackPlan,
      checklistStatusOne,
      checklistStatusTwo,
      checklistStatusThree,
      checklistStatusFour,
      ////////////////////////////////* part -3 *////////////////////////////////
      ImpactedSystemfor,
      ActualPriority,
      Actualimpactlevel,
      ////////////////////////////////* part -4 *////////////////////////////////
      ExecusionTeamMenbers,
      ExecusionTeamleaders,
      ////////////////////////////////* part -5 *////////////////////////////////
      ChangeReviewForperformed,
      ChangeReviewForSuccess,
      ActualDowntime,
      WorkExecutionStatus,
      /////////////////////////////////////

      user,
    );

    return ServiceRequest;
  }
}
