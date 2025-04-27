const express = require("express");
const bodyparser = require("body-parser");

const { PORT } = require("./config/ServerConfig.js");

const ApiRoutes = require("./routes/index.js");

const CityRepository = require("./repository/city-repository.js");

const setupAndStartServer = async () => {
  // create an express object
  const app = express();

  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));

   app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // const repo = new CityRepository();
    // // Use await to ensure that the city is created asynchronously
    // repo.createCity({ name: "New Delhi" })

  });
};

setupAndStartServer();
