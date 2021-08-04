import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoring1628047452564 implements MigrationInterface {
    name = 'PostRefactoring1628047452564'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `post` CHANGE `title` `title` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `post` CHANGE `title` `title` varchar(255) NULL");
    }

}
