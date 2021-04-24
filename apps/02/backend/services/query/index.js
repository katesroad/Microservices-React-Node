const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/events", async (req, res) => {
  res.end();
});

app.listen(4003, () => {
  console.log("query service is listening on 4001");
});
