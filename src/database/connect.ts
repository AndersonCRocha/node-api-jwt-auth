import 'reflect-metadata';
import { createConnection } from 'typeorm';

createConnection().then(connection => {
  console.log('📦 Database connected!!!');
  connection.runMigrations();
});
