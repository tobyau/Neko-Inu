const express = require('express');
const app = express();

const bodyParser = require('body-parser');
var axios = require('axios');

const { apiKey } = require("./keys");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));


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
 
 app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname +'/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});