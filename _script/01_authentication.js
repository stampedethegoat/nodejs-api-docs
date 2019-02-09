require('dotenv').config()

const dogapi = require("dogapi");

let options = {
  api_key: process.env.API_KEY
  app_key: process.env.APP_KEY
};

dogapi.initialize(options);
