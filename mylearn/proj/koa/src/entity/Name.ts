import {Entity, Column} from "typeorm";

export class Name {
    
    @Column()
    first: string;
    
    @Column()
    last: string;
    
}