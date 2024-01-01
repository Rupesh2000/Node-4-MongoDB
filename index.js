const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
dotEnv.config();

const app = express();

app.unsubscribe(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./public"));

// console.log(process.env.SERVER_PORT, process.env.MONGODB_URL);

// const MONGODB_URL = `mongodb+srv://user:user123@database1.vegpfgd.mongodb.net/?retryWrites=true&w=majority`;

// mongoose
//   .connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("DB connection Successful!"))
//   .catch((err) => console.log("DB Connection failed!", err));

app.get("/", (req, res) => {
  res.send("I started learning MongoDB finally!");
});

const Employee = mongoose.model("Employee", {
  name: String,
  email: String,
});

const Child = mongoose.model("Child", {
  name: String,
  age: String,
});

app.listen(process.env.SERVER_PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connection Successful!");
      console.log("Server is running on http://localhost:3000");
    })
    .catch((err) => console.log("DB Connection failed!", err));
});

/* MERN: React, Node, Express, MongoDB */

/*
    Database : To store data permanently
    - SQL Vs No-SQL
    - SQL (Structured Query Language) DB
      - Also known as relational Database
      - Structured data in row and columns
      - Eg: PostgreSQL, MySQL, SQL Server, etc
    - No-SQL (Un-structured) DB
      - Also known as Non-Relational Database
      - Eg: MongoDB, AWS DynamoDB, etc
      
    - When to consider SQL DB
      - Clear picture of schema (Eg.: Banks can use it to store account details)
    - When to consider No-SQL DB
      - Schema is expected to change/differ over the time (Eg.: User details for a social media app)  

    So Here for MERN We will use MongoDB as Database

    ## MongoDB
    - Single data in DB can be referred to a 'document'
    - Collection of these documents: 'Collection'

    Eg: Collection: Employees, Document: Single employee details

    ## Mongoose
    - Also known as a driver between your express Application and MongoDB
    - Object Data Modeling (ODM) Library for MongoDB

    ## CRUD: Create, Read, Update, Delete

    ## Models in Mongoose
      Employee
      {
        name: String,
        email: String
      }


*/
