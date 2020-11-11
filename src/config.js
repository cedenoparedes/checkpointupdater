const enviroments = { dev: "dev", prod: "prod" };

module.exports = {
  env: enviroments.dev,
  baseApiURL: {
    dev: "http://61aefe86bcac.ngrok.io",
    prod: "",
  },
};
