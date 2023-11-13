import "dotenv/config";

const config = {
  development: {
    username: process.env.DB_USERNAME_DEVELOPMENT,
    password: process.env.DB_PASSWORD_DEVELOPMENT,
    database: process.env.DB_DATABASE_DEVELOPMENT,
    host: process.env.DB_HOST_DEVELOPMENT,
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.DB_DATABASE_TEST,
    host: process.env.DB_HOST_TEST,
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME_PRODUCTION,
    password: process.env.DB_PASSWORD_PRODUCTION,
    database: process.env.DB_DATABASE_PRODUCTION,
    host: process.env.DB_HOST_PRODUCTION,
    dialect: "postgres",
  },
};

export default config;

// (!)(?) we have to have this here so the transpiled JS works for the sequelize-cli
module.exports = config;
