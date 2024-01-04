// src/service-request.service.ts
import { Injectable } from '@nestjs/common';
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

  // async findAll(): Promise<ServiceRequest[]> {
  //   return await this.serviceRequestRepository.find();
  // }
}
