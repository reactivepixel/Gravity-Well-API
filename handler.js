import { Sequelize } from "sequelize";
import { sequelize } from "./db/models/index.js";
// const { sequelize } = require("db/models");

export const ping = async (event) => {
  const nodes = await sequelize.models.node.findAll();
  console.log("All Nodes:", nodes);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Ping!",
    }),
  };
};

export const pong = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Pong! ${process.env.FOO}`,
    }),
  };
};
