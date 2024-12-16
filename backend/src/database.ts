import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  {
    dialect: 'postgres',
    host: process.env.PG_HOST,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database:  process.env.PG_DATABASE,
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false 
      }
    },
    logging: false, 
  }
);

export default sequelize;
