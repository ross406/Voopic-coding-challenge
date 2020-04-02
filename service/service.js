const express = require('express');
const app = express();
const cities = require('./citys');

const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('homepage.ejs');
});

app.get('/suggestions', (req, res) => {
  const resultArray = [];
  const { q: query } = req.query;
  if (query) {
    for (let i = 0; i < cities.length; i += 1) {
      const c = cities[i].city;
      if (c.toLowerCase().startsWith(query.toLowerCase())) {
        resultArray.push(c);
      }
    }
  }

  res.json(resultArray);
});

app.listen(port);

console.log('Server running at Port: ' + port);
