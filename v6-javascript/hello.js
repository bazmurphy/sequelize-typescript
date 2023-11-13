require("dotenv").config();

function sayHello() {
  console.log(`The NODE_ENV is ${process.env.NODE_ENV}`);
}

sayHello();
