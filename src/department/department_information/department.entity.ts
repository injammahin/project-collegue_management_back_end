// src/department.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  department_id: number;

  @Column()
  department_name: string;

  @Column()
  department_supervisor: string;
}
