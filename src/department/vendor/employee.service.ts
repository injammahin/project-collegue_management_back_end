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
  findAllVendorNames(): Promise<string[]> {
    return this.repo
      .find({ select: ['verdor_name'] })
      .then((vendors) => vendors.map((vendor) => vendor.verdor_name));
  }
}
