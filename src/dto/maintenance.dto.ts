import { IsNotEmpty } from 'class-validator';
export class MaintenanceDto {
  @IsNotEmpty()
  requestNumber: string;

  @IsNotEmpty()
  subofChange: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  requesterName: string;

  @IsNotEmpty()
  EmployeeId: string;

  @IsNotEmpty()
  department: string;

  @IsNotEmpty()
  contractNo: string;

  @IsNotEmpty()
  MaintenanceType: string;

  @IsNotEmpty()
  purposeOfActivity: string;
  @IsNotEmpty()
  priority: string;
  @IsNotEmpty()
  impactLevel: string;
  @IsNotEmpty()
  requiredDowntime: string;
  @IsNotEmpty()
  mentionDowntime: string;
  @IsNotEmpty()
  startDate: string;
  @IsNotEmpty()
  startTime: string;
  @IsNotEmpty()
  endDate: string;
  @IsNotEmpty()
  endTime: string;
}
