const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const useApiRoutes = require("./backend/routes/index");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// env file configration
dotenv.config({ path: "./.env" });

// cors allow to all
app.use(cors({ origin: true }));

// all Api routes
useApiRoutes(app);

// static serve of build
app.use("/", express.static(path.join(__dirname, "./client/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting Down Server due to Uncaught Exception");
  process.exit(1);
});

// Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(err);
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down the server due to Unhandled Promise rejection");
});
console.log("NODE_ENV", process.env.NODE_ENV);
mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("MongoDB Database Connected to Server");
    app.listen(process.env.PORT, () => {
      console.log(` Server is running on PORT : ${process.env.PORT} .`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection ERROR :", error);
  });
