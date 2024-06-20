import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1718847132643 implements MigrationInterface {
    name = 'Initial1718847132643'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "restaurants" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "address" character varying NOT NULL, "phone" integer NOT NULL, "email" character varying NOT NULL, "description" character varying NOT NULL, "opening_hours" integer NOT NULL, "closing_hours" integer NOT NULL, CONSTRAINT "PK_e2133a72eb1cc8f588f7b503e68" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tables" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "number" integer NOT NULL, "seats" integer NOT NULL, "location" character varying NOT NULL, "restaurant_id" uuid, CONSTRAINT "PK_7cf2aca7af9550742f855d4eb69" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reservations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "seats" integer NOT NULL, "reservation_time" TIMESTAMP NOT NULL, "status" character varying NOT NULL, "user_id" uuid, "table_id" uuid, "restaurant_id" uuid, CONSTRAINT "PK_da95cef71b617ac35dc5bcda243" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('BASIC', 'ADMIN')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "phone" integer NOT NULL, "role" "public"."users_role_enum" NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tables" ADD CONSTRAINT "FK_77e362d578933cf4518770d11ae" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_4af5055a871c46d011345a255a6" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_5027ce24b4bc5e090302b2f7754" FOREIGN KEY ("table_id") REFERENCES "tables"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_ee6b00404309108652a2307c66c" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_ee6b00404309108652a2307c66c"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_5027ce24b4bc5e090302b2f7754"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_4af5055a871c46d011345a255a6"`);
        await queryRunner.query(`ALTER TABLE "tables" DROP CONSTRAINT "FK_77e362d578933cf4518770d11ae"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`DROP TABLE "reservations"`);
        await queryRunner.query(`DROP TABLE "tables"`);
        await queryRunner.query(`DROP TABLE "restaurants"`);
    }

}
