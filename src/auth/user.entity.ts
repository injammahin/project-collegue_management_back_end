import { Maintenance } from 'src/maintenance_request_form/maintetance.entity';
import { ServiceRequest } from 'src/service-request/service-request.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @Column()
  email: string;
  @Column()
  password: string;
  @OneToMany(() => ServiceRequest, (serviceRequest) => serviceRequest.user)
  serviceRequests: ServiceRequest[];
  @OneToMany(() => Maintenance, (maintenance) => maintenance.user)
  maintenances: Maintenance[];
  length: any;
}
