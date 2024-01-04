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
    department_id: number,

    department_name: string,

    department_supervisor: string,
  ) {
    const ServiceRequest = await this.ServiceRequestService.create(
      department_id,

      department_name,

      department_supervisor,
    );

    return ServiceRequest;
  }
}
