/* The Vendor class represents a vendor entity with an ID, vendor name, and a many-to-one relationship
with the User class. */
import { User } from 'src/auth/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Vendor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  verdor_name: string;

  @ManyToOne(() => User, (user) => user.employees)
  user: User;
}
