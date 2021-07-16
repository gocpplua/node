import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Profile1 } from "./Profile1";

@Entity()
export class User1 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Profile1) // 指定另一面作为第二个参数
  @JoinColumn()
  profile1: Profile1;
}