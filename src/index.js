const express = require("express");
const bodyparser = require("body-parser");


const { PORT } = require("./config/ServerConfig.js");


const sertupAndStartServer = async () => {
  //create a express object
  const app = express();

  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

sertupAndStartServer();
