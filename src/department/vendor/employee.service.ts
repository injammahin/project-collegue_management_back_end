// src/service-request.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendor } from './employee.entity';

@Injectable()
export class employeeService {
  constructor(
    @InjectRepository(Vendor) private repo: Repository<Vendor>, // private emailService: EmailService,
  ) {}

  create(verdor_name: string) {
    const employee = this.repo.create({
      verdor_name,
    });

    return this.repo.save(employee);
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
  // async findAll(): Promise<Employee[]> {
  //   return this.repo.find({ relations: ['user'] });

  // async update(id: number, attrs: Partial<Employee>) {
  //   const employee = await this.findOne(id);
  //   if (!employee) {
  //     throw new Employee('Payment details not found');
  //   }
  //   Object.assign(employee, attrs);
  //   return this.repo.save(employee);
  // }
  // async remove(id: number) {
  //   const payment = await this.findOne(id);
  //   if (!payment) {
  //     throw new NotFoundException('user not found');
  //   }
  //   return this.repo.remove(payment);
}
