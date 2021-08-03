import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { Photo2 } from "./Photo2";

@Entity()
export class User2 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Photo2, photo => photo.user)
  photos: Photo2[];
}