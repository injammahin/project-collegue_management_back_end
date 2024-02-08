/* The `Maintenance` class represents a service request entity with various properties and a
relationship to the `User` entity. */
/* The `Maintenance` class represents a service request entity with various properties and a
relationship to the `User` entity. */
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
  @Column()
  changeLocation: string;
  @Column()
  targetedSystemFor: string;
  @Column()
  IPaddress: string;
  @Column()
  ImpactedSystemform: string;
  @Column()
  DetailedDescriptionOfChange: string;
  @Column()
  DetailedWorkedPlanTask: string;
  @Column()
  DetailedWorkedPlanStartTime: string;
  @Column()
  DetailedWorkedPlanEndTime: string;
  @Column()
  RequirementTools: string;
  @Column()
  Implementationteam: string;
  @Column()
  Communication: string;
  @Column()
  RollBackPlan: string;
  @Column()
  checklistStatusOne: string;
  @Column()
  checklistStatusTwo: string;
  @Column()
  checklistStatusThree: string;
  @Column()
  checklistStatusFour: string;
  @Column()
  ImpactedSystemfor: string;
  @Column()
  ActualPriority: string;
  @Column()
  Actualimpactlevel: string;
  ////////////////////////////////* part -4 *////////////////////////////////
  @Column()
  ExecusionTeamMenbers: string;
  @Column()
  ExecusionTeamleaders: string;
  ////////////////////////////////* part -4 *////////////////////////////////
  @Column()
  ChangeReviewForperformed: string;
  @Column()
  ChangeReviewForSuccess: string;
  @Column()
  ActualDowntime: string;
  @Column()
  WorkExecutionStatus: string;
  @ManyToOne(() => User, (user) => user.maintenances)
  user: User;
}
