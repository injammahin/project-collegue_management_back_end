import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class employeeDto {
  @IsNotEmpty()
  verdor_name: string;
}
