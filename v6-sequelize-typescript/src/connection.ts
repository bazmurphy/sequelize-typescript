import "dotenv/config";

// import { Sequelize } from "sequelize";
import { Sequelize } from "sequelize-typescript";

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
  models: [__dirname + "/models"], // We add the Models here
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

async function sync() {
  try {
    await sequelize.sync();
    console.log("Sync was successful.");
  } catch (error) {
    console.error("Unable to Sync the database:", error);
  }
}

sync();

export default sequelize;
