// src/service-request.entity.ts
import { User } from 'src/auth/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
  @Column({ default: 'Pending Approval' })
  approvalStatus: string;
  @ManyToOne(() => User, (user) => user.serviceRequests)
  user: User;
}
