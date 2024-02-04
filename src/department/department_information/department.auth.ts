import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { departmentService } from './department.service';
@Injectable()
export class departmentAuthService {
  constructor(private ServiceRequestService: departmentService) {}
  async fillup(
    manager_id: number,

    department_name: string,
  ) {
    const ServiceRequest = await this.ServiceRequestService.create(
      manager_id,

      department_name,
    );

    return ServiceRequest;
  }
}
