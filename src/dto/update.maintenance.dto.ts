import { IsOptional } from 'class-validator';
export class UpdateMaintenanceDto {
  @IsOptional()
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
}
