import "./shared/infrastructure/load-env-vars";

import bodyParser from "body-parser";
import express from "express";

import { appConfig } from "./shared/infrastructure/config";

function main() {
  const app = express();

  app.use(bodyParser.json());
  app.use("/");

  const { port } = appConfig.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

main();
