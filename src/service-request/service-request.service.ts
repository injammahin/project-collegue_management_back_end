// src/service-request.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceRequest } from './service-request.entity';

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
    });

    return this.repo.save(payment);
  }

  // async findAll(): Promise<ServiceRequest[]> {
  //   return await this.serviceRequestRepository.find();
  // }
  async findAll(): Promise<ServiceRequest[]> {
    return this.repo.find({ relations: ['user'] });
  }
}
