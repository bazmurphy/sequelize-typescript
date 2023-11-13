import "dotenv/config";
import { Sequelize } from "sequelize";

const environment = `${process.env.NODE_ENV}`.toUpperCase();
console.log("environment:", environment);

const sequelize = new Sequelize({
  dialect: "postgres",
  username: process.env[`DATABASE_USERNAME_${environment}`],
  password: process.env[`DATABASE_PASSWORD_${environment}`],
  host: process.env[`DATABASE_HOST_${environment}`],
  port: 5432,
  database: process.env[`DATABASE_NAME_${environment}`],
  logging: false,
});

async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

authenticate();

export default sequelize;
