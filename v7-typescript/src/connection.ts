import "dotenv/config";
import { Sequelize } from "@sequelize/core";

// establish the Environment (and convert to Upper Case)
const environment = `${process.env.NODE_ENV}`.toUpperCase();
console.log("environment:", environment);

// get and set the Database Variables based on the Environment
const username = process.env[`DATABASE_USERNAME_${environment}`];
const password = process.env[`DATABASE_PASSWORD_${environment}`];
const host = process.env[`DATABASE_HOST_${environment}`];
const port = 5432;
const databaseName = process.env[`DATABASE_NAME_${environment}`];

// construct the Database Connection URI
const databaseConnectionURI = `postgres://${username}:${password}@${host}:${port}/${databaseName}`;
// console.log("databaseConnectionURI:", databaseConnectionURI);

// set the Logging Options for Sequelize
const loggingOptions = { logging: false };

// Create a new instance of Sequelize
const sequelize = new Sequelize(databaseConnectionURI, loggingOptions);

// function to Authenticate the Database Connection
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
