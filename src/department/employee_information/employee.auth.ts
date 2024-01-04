import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { employeeService } from './employee.service';
@Injectable()
export class employeeAuthService {
  constructor(private employeeService: employeeService) {}
  async fillup(
    user_id: number,

    employee_name: string,

    designation: string,

    department_id: string,
  ) {
    const ServiceRequest = await this.employeeService.create(
      user_id,

      employee_name,

      designation,

      department_id,
    );

    return ServiceRequest;
  }
}
