// const Sequelize = require("sequelize");
const { sequelize } = require("db/models");

exports.ping = async (event) => {
  const nodes = await sequelize.models.Node.findAll();

  console.log("All Nodes:", nodes);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Ping!",
    }),
  };
};

exports.pong = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Pong! ${process.env.FOO}`,
    }),
  };
};
