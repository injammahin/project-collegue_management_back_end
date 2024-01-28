import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ServiceRequestDto {
  @IsNotEmpty()
  requestNo: string;
  @IsNotEmpty()
  requestedBy: string;
  @IsNotEmpty()
  department: string;
  @IsNotEmpty()
  designation: string;
  @IsNotEmpty()
  date: string;
  @IsNotEmpty()
  requestFor: string;
  @IsNotEmpty()
  employeeId: string;
  @IsNotEmpty()
  reasonOfRequest: string;
  @IsNotEmpty()
  serviceDetails: string;
  @IsNotEmpty()
  submissionDateTime: string;
  user: any;
  @IsOptional()
  accessDateDuration: string;
  @IsOptional()
  accessTimeDuration: string;
  @IsOptional()
  execusion: string;
  @IsOptional()
  vandorName: string;
  @IsOptional()
  vandorAssignedReason: string;
  @IsOptional()
  deviceRequired: string;
  @IsOptional()
  WorkTeamWithId: string;
  @IsOptional()
  readBy: string;
  @IsOptional()
  ReturnTimeDate: string;
  @IsOptional()
  revokeBy: string;
}
