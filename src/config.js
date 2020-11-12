const enviroments = { dev: "dev", prod: "prod" };

module.exports = {
  env: enviroments.dev,
  baseApiURL: {
    dev: "http://c7128af11493.ngrok.io",
    prod: "",
  },
};
