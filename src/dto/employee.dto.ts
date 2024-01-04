import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class employeeDto {
  @IsNotEmpty()
  user_id: number;
  @IsNotEmpty()
  employee_name: string;
  @IsNotEmpty()
  designation: string;
  @IsNotEmpty()
  department_id: string;
}
