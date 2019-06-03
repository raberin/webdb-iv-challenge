const express = require("express");
const helmet = require("helmet");

const dishesRouter = require("./dishes/dishes_router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/tracks", dishesRouter);

// sanity check route
server.get("/", (req, res) => {
  res.status(200).json({ hello: "World!" });
});

module.exports = server;
