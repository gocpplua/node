import { Entity, Column, PrimaryGeneratedColumn, AfterLoad } from "typeorm";

@Entity()
export class Post {
  @AfterLoad()
  print(){
    console.log('@AfterLoad post')
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;
}