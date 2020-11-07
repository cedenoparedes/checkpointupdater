const enviroments = { dev: "dev", prod: "prod" };

module.exports = {
  env: enviroments.dev,
  baseApiURL: {
    dev: "http://883c9ab77465.ngrok.io",
    prod: "",
  },
};
