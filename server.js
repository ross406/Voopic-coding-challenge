// This code is used for generationg the JSON

const fs = require('fs');

const a = [];
var array = fs
  .readFileSync('./data/cities_canada-usa.tsv')
  .toString()
  .split('\n');
for (i in array) {
  var w = array[i].split('\t');
  a.push({
    id: w[0],
    city: w[1]
  });

  // console.log(array[i]);
}

let data = JSON.stringify(a);
fs.writeFileSync('output1.json', data);
