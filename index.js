const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const txtfile = require("./public/cryptoapisverifydomain.txt");

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("hello world! crypto apis testing...");
});

app.post("/test", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(4000, () => {
  console.log("back server onload");
});
