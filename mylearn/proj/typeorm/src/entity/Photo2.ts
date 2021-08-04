import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User2 } from "./User2";

@Entity()
export class Photo2 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  // 在@ ManyToOne或@OneToMany关系中，@JoinColumn不是必需的，因为两个装饰器都不同，并且放置@ManyToOne装饰器的表将具有关系列。
  // https://typeorm.bootcss.com/faq#%E5%85%B3%E7%B3%BB%E4%B8%AD%E7%9A%84owner-side%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%E6%88%96%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%91%E4%BB%AC%E9%9C%80%E8%A6%81%E4%BD%BF%E7%94%A8joincolumn%E5%92%8Cjointable%EF%BC%9F
  @ManyToOne(() => User2, user => user.photos)
  user: User2;
}