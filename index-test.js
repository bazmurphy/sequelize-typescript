import "dotenv/config";

// const config = require("./config/config"); // CommonJS
import config from "./config/config.js"; // ESM

let someConfigObject = {};

console.log("1");
console.log(process.env.NODE_ENV);

console.log("2");
console.log(config);
console.log(config[process.env.NODE_ENV]);

if (process.env.NODE_ENV) {
  someConfigObject = { ...config[process.env.NODE_ENV] };
}

console.log("4");
console.log(someConfigObject);
