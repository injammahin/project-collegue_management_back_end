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
    reasonOfRequested: string,

    serviceDetails: string,
    submissionDateTime: string,
    user: string,
    accessDateDuration: string,
    accessTimeDuration: string,
    execusion: string,
    vandorName: string,
    vandorAssignedReason: string,
    deviceRequired: string,
    WorkTeamWithId: string,
    readBy: string,
    ReturnTimeDate: string,
    revokeBy: string,
    deviceApprovedBy: string,
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
      reasonOfRequested,

      serviceDetails,
      submissionDateTime,
      user,
      accessDateDuration,
      accessTimeDuration,
      execusion,
      vandorName,
      vandorAssignedReason,
      deviceRequired,
      WorkTeamWithId,
      readBy,
      ReturnTimeDate,
      revokeBy,
      deviceApprovedBy,
    );

    return ServiceRequest;
  }
}
