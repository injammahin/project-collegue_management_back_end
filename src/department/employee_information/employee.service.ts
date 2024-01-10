// src/service-request.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class employeeService {
  constructor(
    @InjectRepository(Employee) private repo: Repository<Employee>, // private emailService: EmailService,
  ) {}

  create(
    user_id: number,

    employee_name: string,

    designation: string,

    department_id: string,
  ) {
    const employee = this.repo.create({
      user_id,

      employee_name,

      designation,

      department_id,
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
