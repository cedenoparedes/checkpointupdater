const enviroments = { dev: "dev", prod: "prod" };

module.exports = {
  env: enviroments.dev,
  baseApiURL: {
    dev: "http://22a9910a9eb9.ngrok.io",
    prod: "",
  },
};
