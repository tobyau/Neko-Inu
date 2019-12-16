const express = require('express');

const bodyParser = require('body-parser');
var axios = require('axios');

const app = express();

const port = process.env.PORT || 5000;

const { apiKey } = require("./keys");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/api/search', async (req, res) => {
  axios.post('https://getyourpet.com/api/partnerpetsearch/', req.body, {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": apiKey
    }
  }).then((response) => {
    res.send(response.data);
  }).catch((error) => {
    console.log(error);
  })
})


app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
 });

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});