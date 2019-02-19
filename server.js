const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let cities = []

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile('views/index.html' , { root : __dirname});
})

app.post('/api/towns', (request, response) => {
  console.log(request.body)
  let newCity = { name: request.body.name, description: request.body.description };
  cities.push(newCity);
  response.json(cities);
});

const server = app.listen(3000);