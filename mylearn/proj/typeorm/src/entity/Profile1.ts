import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User1 } from "./User1";

@Entity()
export class Profile1 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gender: string;

  @Column()
  photo: string;

  @OneToOne(() => User1, u => u.profile1) // 将另一面指定为第二个参数
  user2: User1;
}