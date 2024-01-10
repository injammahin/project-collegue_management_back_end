// src/department.entity.ts
import { User } from 'src/auth/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

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
  @ManyToOne(() => User, (user) => user.departments)
  user: User;
}
