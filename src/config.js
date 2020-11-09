const enviroments = { dev: "dev", prod: "prod" };

module.exports = {
  env: enviroments.dev,
  baseApiURL: {
    dev: "http://497bf3031c8a.ngrok.io",
    prod: "",
  },
};
