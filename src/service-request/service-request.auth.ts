import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ServiceRequestService } from './service-request.service';
@Injectable()
export class ServiceAuthService {
  constructor(private ServiceRequestService: ServiceRequestService) {}
  async fillup(
    requestNo: string,

    requestedBy: string,

    department: string,

    designation: string,

    date: string,

    requestFor: string,

    employeeId: string,

    reasonOfRequest: string,

    serviceDetails: string,
    submissionDateTime: string,
  ) {
    const ServiceRequest = await this.ServiceRequestService.create(
      requestNo,

      requestedBy,

      department,

      designation,

      date,

      requestFor,

      employeeId,

      reasonOfRequest,

      serviceDetails,
      submissionDateTime,
    );

    return ServiceRequest;
  }
}
