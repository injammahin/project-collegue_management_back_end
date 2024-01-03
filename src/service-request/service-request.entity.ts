// src/service-request.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ServiceRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  requestNo: string;

  @Column()
  requestedBy: string;

  @Column()
  department: string;

  @Column()
  designation: string;

  @Column()
  date: string;

  @Column()
  requestFor: string;

  @Column()
  employeeId: string;

  @Column()
  reasonOfRequest: string;

  @Column()
  serviceDetails: string;
}
