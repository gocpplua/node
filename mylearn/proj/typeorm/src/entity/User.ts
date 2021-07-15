import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
export enum UserRole{
    ADMIN = 'admin',
    EDITOR = 'editor'
}

@Entity({database: "test1"})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column({
        // 不设置的话，数据库类型就是:varchar(255)
        type: "enum",
        enum: UserRole,
        default: UserRole.ADMIN
    })
    role: UserRole

    @Column('simple-array')
    names: string[];
}
