import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany } from "typeorm";
import { Album } from "./Album";
import { PhotoMetadata } from "./PhotoMetadata";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("text")
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;

  @OneToOne(type => PhotoMetadata, metadata => metadata.photo, {
    cascade: true
  })
  metadata: PhotoMetadata;

  @ManyToMany(type => Album, album => album.photos)
  albums: Album[];
}