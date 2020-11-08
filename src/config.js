const enviroments = { dev: "dev", prod: "prod" };

module.exports = {
  env: enviroments.dev,
  baseApiURL: {
    dev: "http://96c24d755f22.ngrok.io",
    prod: "",
  },
};
