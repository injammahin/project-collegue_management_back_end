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
  reasonOfRequested: string;
  @Column()
  accessDateDuration: string;
  @Column()
  accessTimeDuration: string;
  @Column()
  execusiondata: string;
  @Column()
  vandorName: string;
  @Column()
  vandorAssignedReason: string;
  @Column()
  deviceRequired: string;
  @Column()
  WorkTeamWithId: string;
  @Column()
  deviceApprovedBy: string;
  @Column()
  readBy: string;
  @Column()
  ReturnTimeDate: string;
  @Column()
  revokeBy: string;
  @Column()
  serviceDetails: string;
  @Column({ default: 'Pending ' })
  supervisorStatus: string;
  @Column({ default: 'Pending ' })
  approvalStatus: string;
  @Column({ default: 'Pending ' })
  cisoStatus: string;
  @Column({ default: 'Pending ' })
  HeadOfDivisionStatus: string;
  @Column({ default: 'N/A ' })
  submissionDateTime: string;
  @ManyToOne(() => User, (user) => user.serviceRequests)
  user: User;
}
