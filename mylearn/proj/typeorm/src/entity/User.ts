import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";
import { Name } from "./Name";
export enum UserRole{
    ADMIN = 'admin',
    EDITOR = 'editor'
}

@Entity({database: "test1"})
export class User extends Name{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    private m_age: number;

    @Column({
        // 不设置的话，数据库类型就是:varchar(255)
        type: "enum",
        enum: UserRole,
        default: UserRole.ADMIN
    })
    role: UserRole

    @Column('simple-array')
    names: string[];

    @CreateDateColumn()
    data: string;


    public get age(){
        return this.m_age;
    }

    public set age(age: number){
        this.m_age = age;
    }
}
