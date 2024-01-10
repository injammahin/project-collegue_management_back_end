import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { MaintenanceRequestService } from './maintenance.service';
import { User } from 'src/auth/user.entity';
@Injectable()
export class maintenanceAuthService {
  constructor(private MaintenanceRequestService: MaintenanceRequestService) {}
  async fillup(
    requestNumber: string,

    subofChange: string,

    date: string,

    requesterName: string,

    EmployeeId: string,

    department: string,

    contractNo: string,

    MaintenanceType: string,

    purposeOfActivity: string,

    priority: string,

    impactLevel: string,

    requiredDowntime: string,

    mentionDowntime: string,

    startDate: string,

    startTime: string,

    endDate: string,

    endTime: string,
  ) {
    const ServiceRequest = await this.MaintenanceRequestService.create(
      requestNumber,

      subofChange,

      date,

      requesterName,

      EmployeeId,

      department,

      contractNo,

      MaintenanceType,

      purposeOfActivity,

      priority,

      impactLevel,

      requiredDowntime,

      mentionDowntime,

      startDate,

      startTime,

      endDate,

      endTime,
    );

    return ServiceRequest;
  }
}
