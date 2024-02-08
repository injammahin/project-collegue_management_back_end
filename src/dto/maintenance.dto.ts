/* The `MaintenanceDto` class represents a service request entity with various properties and a
relationship to the `User` entity in TypeScript. */
/* The `Maintenance` class represents a service request entity with various properties and a
relationship to the `User` entity. */
import { IsNotEmpty, IsOptional } from 'class-validator';
export class MaintenanceDto {
  @IsNotEmpty()
  requestNumber: string;

  @IsOptional()
  subofChange: string;

  @IsOptional()
  date: string;

  @IsOptional()
  requesterName: string;
  @IsOptional()
  EmployeeId: string;

  @IsOptional()
  department: string;

  @IsOptional()
  contractNo: string;

  @IsOptional()
  MaintenanceType: string;

  @IsOptional()
  purposeOfActivity: string;
  @IsOptional()
  priority: string;
  @IsOptional()
  impactLevel: string;
  @IsOptional()
  requiredDowntime: string;
  @IsOptional()
  mentionDowntime: string;
  @IsOptional()
  startDate: string;
  @IsOptional()
  startTime: string;
  @IsOptional()
  endDate: string;
  @IsOptional()
  endTime: string;
  @IsOptional()
  changeLocation: string;
  @IsOptional()
  targetedSystemFor: string;
  @IsOptional()
  IPaddress: string;
  @IsOptional()
  ImpactedSystemform: string;
  @IsOptional()
  DetailedDescriptionOfChange: string;
  @IsOptional()
  DetailedWorkedPlanTask: string;
  @IsOptional()
  DetailedWorkedPlanStartTime: string;
  @IsOptional()
  DetailedWorkedPlanEndTime: string;
  @IsOptional()
  RequirementTools: string;
  @IsOptional()
  Implementationteam: string;
  @IsOptional()
  Communication: string;
  @IsOptional()
  RollBackPlan: string;
  @IsOptional()
  checklistStatusOne: string;
  @IsOptional()
  checklistStatusTwo: string;
  @IsOptional()
  checklistStatusThree: string;
  @IsOptional()
  checklistStatusFour: string;
  ////////////////////////////////* part -3 *////////////////////////////////
  @IsOptional()
  ImpactedSystemfor: string;
  @IsOptional()
  ActualPriority: string;
  @IsOptional()
  Actualimpactlevel: string;
  @IsOptional()
  ////////////////////////////////* part -4 *////////////////////////////////
  ExecusionTeamMenbers: string;
  @IsOptional()
  ExecusionTeamleaders: string;
  @IsOptional()
  ////////////////////////////////* part -4 *////////////////////////////////
  ChangeReviewForperformed: string;
  @IsOptional()
  ChangeReviewForSuccess: string;
  @IsOptional()
  ActualDowntime: string;
  @IsOptional()
  WorkExecutionStatus: string;
  @IsOptional()
  user: any;
}
