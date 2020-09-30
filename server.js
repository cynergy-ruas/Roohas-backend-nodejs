require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
// const fbAuth = require("./fbAuth");
// const { login, userBasedFunc } = require("./user");

const PORT = 3000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hey! This is working !");
});
app.post("/login", login);
// app.get("/userBasedFunc", fbAuth, userBasedFunc);

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
