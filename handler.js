exports.ping = async (event) => {
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
      message: "Pong!",
    }),
  };
};
