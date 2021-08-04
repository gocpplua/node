import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoring1628046973042 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`alter table post change column title title varchar(254);`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`alter table post change column title title varchar(255);`);
    }

}
