import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class departmentDto {
  @IsNotEmpty()
  department_id: number;
  @IsNotEmpty()
  department_name: string;
  @IsNotEmpty()
  department_supervisor: string;
}
