"use strict";
const bcrypt = require("bcrypt");
// generate salt to hash password

const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./.env" });
const { MONGO_URI, DB_NAME } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

console.log(MONGO_URI);

const { v4: uuidv4 } = require("uuid");

const path = require("path");
const express = require("express");

const PORT = 8000;

express()
  .use(express.json())

  .get("/", (req, res) => {
    res.status(200).send("Welcome to the server!");
  })

  .get("/hello", (req, res) => {
    res.status(200).json({ hi: "hi" });
  })

  .listen(PORT, function () {
    console.info("🌍 Listening on port " + PORT);
  });
