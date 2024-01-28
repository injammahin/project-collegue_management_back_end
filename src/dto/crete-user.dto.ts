import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
  @IsNotEmpty()
  user_id: string;
  @IsNotEmpty()
  employee_name: string;
  @IsNotEmpty()
  designation: string;
  @IsNotEmpty()
  department_id: string;
  role?: string;
}
