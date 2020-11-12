const enviroments = { dev: "dev", prod: "prod" };

module.exports = {
  env: enviroments.dev,
  baseApiURL: {
    dev: "http://cee5cf1c78ae.ngrok.io",
    prod: "",
  },
};
