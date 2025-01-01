import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';

  export enum Role {
    ADMIN = 'ADMIN',
    TEACHER = 'TEACHER',
    STUDENT = 'STUDENT',
    PARENT = 'PARENT',
  }

  @Entity('users')
  export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({
      type: 'enum',
      enum: Role,
      default: Role.STUDENT,
    })
    role: Role;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
  }
