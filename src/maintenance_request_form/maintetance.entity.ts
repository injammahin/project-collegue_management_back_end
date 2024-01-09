// src/service-request.entity.ts
import { User } from 'src/auth/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Maintenance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  requestNumber: string;

  @Column()
  subofChange: string;

  @Column()
  date: string;

  @Column()
  requesterName: string;

  @Column()
  EmployeeId: string;

  @Column()
  department: string;

  @Column()
  contractNo: string;

  @Column()
  MaintenanceType: string;

  @Column()
  purposeOfActivity: string;
  @Column()
  priority: string;
  @Column()
  impactLevel: string;
  @Column()
  requiredDowntime: string;
  @Column()
  mentionDowntime: string;
  @Column()
  startDate: string;
  @Column()
  startTime: string;
  @Column()
  endDate: string;
  @Column()
  endTime: string;
}
