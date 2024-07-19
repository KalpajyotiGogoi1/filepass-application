const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());

app.use(
  cors({
    origin: "*",
  })
);

const upRoutes = require("./routes/upRoutes");
const downRoutes = require("./routes/downRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/upload_files", upRoutes);

app.get("/download_file/:filename", downRoutes);

module.exports = app;
