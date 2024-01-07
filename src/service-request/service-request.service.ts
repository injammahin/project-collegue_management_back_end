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
}
