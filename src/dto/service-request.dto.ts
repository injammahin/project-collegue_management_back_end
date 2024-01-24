import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

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
}
