const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");
const utils = require("../../events/index");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = { id, title };
  await axios.post(
    'http://localhost:"4002/events',
    utils.getPostCreateEvent({ id, title })
  );

  res.status(201).send(posts[id]);
});

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  console.log(`received event:`, type);
  res.end();
});

app.listen(4000, () => {
  console.log("posts service is listening on 4000");
});
