const enviroments = { dev: "dev", prod: "prod" };

module.exports = {
  env: enviroments.dev,
  baseApiURL: {
    dev: "http://897a8ec95111.ngrok.io",
    prod: "",
  },
};
