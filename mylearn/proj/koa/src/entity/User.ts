import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Name} from "./Name";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column(type => Name)
    name: Name;
    
    @Column()
    isActive: boolean;
    
}