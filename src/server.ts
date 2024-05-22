import { app } from "./app";
import { config } from "./config";
import { Server } from "http";
import mongoose from "mongoose";

let server: Server;

const main = async () => {
  server = app.listen(config.PORT, () => {
    console.log(`Server is running to the port ${config.PORT}`);
  });

  await mongoose.connect(config.MONGO_URI!);
};

main();

// handling the uncaught exception
process.on("uncaughtException", () => {
  console.log(`Uncaught exception has occurred, shutting down the server`);
  process.exit(1);
});

// handling the unhandled rejections
process.on("unhandledRejection", () => {
  console.log(
    `Sorry we are facing unhandled rejection, shutting down the server`
  );
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
