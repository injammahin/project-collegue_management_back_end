import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class departmentDto {
  @IsOptional()
  manager_id: number;
  @IsNotEmpty()
  department_name: string;
}
