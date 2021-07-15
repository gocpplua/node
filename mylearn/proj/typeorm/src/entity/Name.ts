import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({database: "test1"})
export class Name {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
      default: 'no name'
    })
    thirdName: string;
}
