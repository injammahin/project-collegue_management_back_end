// src/dto/update-request.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateRequestDto {
  @IsNotEmpty()
  @IsString()
  requestNo: string;

  @IsNotEmpty()
  @IsString()
  requestedBy: string;

  @IsNotEmpty()
  @IsString()
  department: string;

  @IsNotEmpty()
  @IsString()
  designation: string;

  @IsNotEmpty()
  @IsString()
  date: string;

  @IsNotEmpty()
  @IsString()
  requestFor: string;

  @IsNotEmpty()
  @IsString()
  employeeId: string;

  @IsNotEmpty()
  @IsString()
  reasonOfRequest: string;

  @IsNotEmpty()
  @IsString()
  serviceDetails: string;
}
