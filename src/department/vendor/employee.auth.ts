import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { employeeService } from './employee.service';
@Injectable()
export class employeeAuthService {
  constructor(private employeeService: employeeService) {}
  async fillup(verdor_name: string) {
    const ServiceRequest = await this.employeeService.create(verdor_name);

    return ServiceRequest;
  }
}
