const enviroments = { dev: "dev", prod: "prod" };

module.exports = {
  env: enviroments.dev,
  baseApiURL: {
    dev: "http://bbe721143653.ngrok.io",
    prod: "",
  },
};
