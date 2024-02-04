// src/department.entity.ts
import { User } from 'src/auth/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  manager_id: number;

  @Column()
  department_name: string;

  @OneToMany(() => User, (user) => user.department)
  users: User[];
}
