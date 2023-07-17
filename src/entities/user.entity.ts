import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false, length: 255 })
  email: string;

  @Column({ nullable: false, length: 50 })
  username: string;

  @Column({ nullable: false, length: 100 })
  password: string;

  @Column({ nullable: false, length: 100 })
  full_name: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
  date_joined: Date;

  @Column({ nullable: false, length: 20 })
  role: string;

  @Column({ nullable: false, length: 20 })
  status: string;
}
