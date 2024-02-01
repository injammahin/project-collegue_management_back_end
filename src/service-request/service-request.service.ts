// src/service-request.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceRequest } from './service-request.entity';
import { UpdateRequestDto } from 'src/dto/update-request.dto';

@Injectable()
export class ServiceRequestService {
  user: any;
  constructor(
    @InjectRepository(ServiceRequest) private repo: Repository<ServiceRequest>, // private emailService: EmailService,
  ) {}

  create(
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
    user: string,
    accessDateDuration: string,
    accessTimeDuration: string,
    vandorName: string,
    vandorAssignedReason: string,
    deviceRequired: string,
    WorkTeamWithId: string,
    readBy: string,
    ReturnTimeDate: string,
    revokeBy: string,
    execusion: string,
    deviceApprovedBy: string,
  ) {
    const payment = this.repo.create({
      requestNo,

      requestedBy,

      department,

      designation,

      date,

      requestFor,

      employeeId,

      reasonOfRequest,

      serviceDetails,
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

      approvalStatus: 'Pending',
      // supervisorStatus: pending,exe
      cisoStatus: 'Pending',
      HeadOfDivisionStatus: 'Pending',
      submissionDateTime,
    });

    return this.repo.save(payment);
  }
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }
  // async findAll(): Promise<ServiceRequest[]> {
  //   return await this.serviceRequestRepository.find();
  // }
  async findAll(): Promise<ServiceRequest[]> {
    return this.repo.find({ relations: ['user'] });
  }

  async update(id: number, attrs: Partial<ServiceRequest>) {
    const serviceRequest = await this.findOne(id);
    if (!serviceRequest) {
      throw new NotFoundException('Payment details not found');
    }
    Object.assign(serviceRequest, attrs);
    return this.repo.save(serviceRequest);
  }
  async remove(id: number) {
    const payment = await this.findOne(id);
    if (!payment) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(payment);
  }
  async findAllreleasedForm(): Promise<ServiceRequest[]> {
    return this.repo.find({ where: { supervisorStatus: 'Released' } });
  }

  // Method to release a request
  async approve(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for releasing the request (e.g., changing its status)
    request.approvalStatus = 'approve';
    return this.repo.save(request);
  }

  // Method to block a request
  async decline(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for blocking the request (e.g., changing its status)
    request.approvalStatus = 'decline';
    return this.repo.save(request);
  }
  async revision(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for blocking the request (e.g., changing its status)
    request.approvalStatus = 'revision';
    return this.repo.save(request);
  }
  ////////

  // Method to release a request
  async releaseRequest(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for releasing the request (e.g., changing its status)
    request.supervisorStatus = 'Released';
    return this.repo.save(request);
  }

  // Method to block a request
  async blockRequest(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for blocking the request (e.g., changing its status)
    request.supervisorStatus = 'Blocked';
    return this.repo.save(request);
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////
  async findAllApproved(): Promise<ServiceRequest[]> {
    return this.repo.find({ where: { approvalStatus: 'approve' } });
  }

  // Method to release a request
  async approveed(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for releasing the request (e.g., changing its status)
    request.cisoStatus = 'approveed';
    return this.repo.save(request);
  }

  // Method to block a request
  async reject(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for blocking the request (e.g., changing its status)
    request.cisoStatus = 'decline';
    return this.repo.save(request);
  }
  // async (id: number) {
  //   const request = await this.findOne(id);
  //   if (!request) {
  //     throw new NotFoundException('Request not found');
  //   }
  //   // Update logic for blocking the request (e.g., changing its status)
  //   request.approvalStatus = 'revision';
  //   return this.repo.save(request);
  // }
  async findFinalApproved(): Promise<ServiceRequest[]> {
    return this.repo.find({ where: { cisoStatus: 'approveed' } });
  }

  // Method to release a request
  async confirm(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for releasing the request (e.g., changing its status)
    request.HeadOfDivisionStatus = 'confirm';
    return this.repo.save(request);
  }

  // Method to block a request
  async cancel(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for blocking the request (e.g., changing its status)
    request.HeadOfDivisionStatus = 'cancel';
    return this.repo.save(request);
  }
  //find by department
  ////////////////////////////////////////////////////////////////////////
  async findAllFromAlternativeChannelsDepartment(): Promise<ServiceRequest[]> {
    return this.repo.find({ where: { department: 'Alternative Channels' } });
  }
}
