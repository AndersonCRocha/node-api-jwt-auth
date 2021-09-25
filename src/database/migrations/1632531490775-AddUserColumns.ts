import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

class AddUserColumns1632531490775 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('users', [
      new TableColumn({
        name: 'name',
        type: 'text',
        isNullable: false,
      }),
      new TableColumn({
        name: 'role',
        type: 'text',
        isNullable: false,
        default: '\'ROLE_DEFAULT\'',
      }),
      new TableColumn({
        name: 'active',
        type: 'boolean',
        isNullable: false,
        default: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('users', ['name', 'role', 'active']);
  }
}

export default AddUserColumns1632531490775;
