const enviroments = { dev: "dev", prod: "prod" };

module.exports = {
  env: enviroments.dev,
  baseApiURL: {
    dev: "http://cac08bbb5029.ngrok.io",
    prod: "",
  },
};
