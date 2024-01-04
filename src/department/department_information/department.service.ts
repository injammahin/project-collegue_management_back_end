// src/service-request.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './department.entity';

@Injectable()
export class departmentService {
  constructor(
    @InjectRepository(Department) private repo: Repository<Department>, // private emailService: EmailService,
  ) {}

  create(
    department_id: number,

    department_name: string,

    department_supervisor: string,
  ) {
    const department = this.repo.create({
      department_id,

      department_name,

      department_supervisor,
    });

    return this.repo.save(department);
  }

  // async findAll(): Promise<ServiceRequest[]> {
  //   return await this.serviceRequestRepository.find();
  // }
}
