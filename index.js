const express = require('express');
const app = express();

const path = require('path');

const bodyParser = require('body-parser');
var axios = require('axios');

const { apiKey } = require("./config/keys");


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


// heroku: when in production
if(process.env.NODE_ENV === 'production'){
  // Express serve up production assets: main.js or main.css
  app.use(express.static('client/build'));
  // If it doesn't recognize route, Express will serve up index.html
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

const port = process.env.PORT || 5000;

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});