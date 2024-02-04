import { Department } from 'src/department/department_information/department.entity';
import { Employee } from 'src/department/employee_information/employee.entity';
import { Maintenance } from 'src/maintenance_request_form/maintetance.entity';
import { ServiceRequest } from 'src/service-request/service-request.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  user_id: number;
  @Column()
  employee_name: string;
  @Column()
  designation: string;
  // @Column()
  // department_id: string;

  @Column()
  email: string;
  @Column()
  password: string;
  @Column({ default: 'user' }) // Default role is 'user'
  role: string;

  @OneToMany(() => ServiceRequest, (serviceRequest) => serviceRequest.user)
  serviceRequests: ServiceRequest[];
  @OneToMany(() => Maintenance, (maintenance) => maintenance.user)
  maintenances: Maintenance[];
  @OneToMany(() => Employee, (employee) => employee.user)
  employees: Employee[];
  @ManyToOne(() => Department, (department) => department.users)
  department: Department;

  length: any;
}
