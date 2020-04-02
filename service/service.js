const express = require('express');
const app = express();

const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var searchController = require('./searchController');
app.route('/suggestions').get(searchController.search);

app.get('/', (req, res) => {
  res.render('homepage.ejs');
});

app.listen(port);

console.log('Server running at Port: ' + port);
