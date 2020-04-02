'use strict';
const cities = require('./citys');

exports.search = function(req, res) {
  const resultArray = [];
  const { value } = req.query;
  if (value) {
    for (let i = 0; i < cities.length; i += 1) {
      const c = cities[i].city;
      if (c.toLowerCase().startsWith(value.toLowerCase())) {
        resultArray.push(c);
      }
    }
  }

  res.json(resultArray);
};
