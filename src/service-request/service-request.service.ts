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
      approvalStatus: 'Pending Approval',
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
  async updateApprovalStatus(id: number, newStatus: string) {
    // Instead of using findOneBy, use findOne with id as an argument
    const serviceRequest = await this.findOne(id);

    if (!serviceRequest) {
      throw new NotFoundException(`Service request with ID ${id} not found`);
    }

    serviceRequest.approvalStatus = newStatus;
    return this.repo.save(serviceRequest);
  }
  ////////
  async findAllFromITDepartment(): Promise<ServiceRequest[]> {
    return this.repo.find({ where: { department: 'IT' } });
  }

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
  /////////
}
