const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/events', (req, res) => {
  const event = req.body;
  axios.post('http://localhost:4000', event)
  axios.post('http://localhost:4001', event)
  // axios.post('http://localhost:4002', event)

  res.send({status: 'ok'})
}); 

app.listen(4002, () => {
  console.log('event bus is listening on 4002');
});
