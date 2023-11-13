require("dotenv/config"); // CommonJS (CJS)
// import "dotenv/config"; // ESM EcmaScriptModules (ESM)

const config = require("./config/config"); // CommonJS
// import config from "./config/config.js"; // ESM

// check the NODE_ENV
console.log("process.env.NODE_ENV:", process.env.NODE_ENV);

// check the config import
console.log("config:", config);

console.log(config[process.env.NODE_ENV]);

let someConfigObject = {};

if (process.env.NODE_ENV) {
  someConfigObject = { ...config[process.env.NODE_ENV] };
}

console.log("someConfigObject", someConfigObject);
