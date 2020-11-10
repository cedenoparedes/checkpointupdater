const enviroments = { dev: "dev", prod: "prod" };

module.exports = {
  env: enviroments.dev,
  baseApiURL: {
    dev: "http://dd01adc77a39.ngrok.io",
    prod: "",
  },
};
