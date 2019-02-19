const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let cities = []

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile('views/index.html' , { root : __dirname});
})

app.post('/api/towns', (req, res) => {
  console.log(req.body)
  let newCity = { name: req.body.name, description: req.body.description };
  cities.push(newCity);
  res.json(cities);
});

const server = app.listen(4000);