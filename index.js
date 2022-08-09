const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const axios = require("axios");

const port = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("election");
});
// app.get("/login", (req, res) => {
//   res.render("login");
// });
// app.get("/elections", (req, res) => {
//   res.render("election");
// });

app.listen(port, () => console.log(`app running at port:${port}`));
