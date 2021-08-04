import { Length } from "class-validator";
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
  @Length(1,10)
  title: string;

  @Column()
  text: string;
}