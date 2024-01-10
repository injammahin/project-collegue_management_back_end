import { User } from 'src/auth/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  user_id: number;
  @Column()
  employee_name: string;
  @Column()
  designation: string;
  @Column()
  department_id: string;
  @ManyToOne(() => User, (user) => user.employees)
  user: User;
}
