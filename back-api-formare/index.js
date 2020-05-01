const express = require('express');
const faker = require('faker');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

//Create fake names
let names = [];
for(i = 0; i <= 116; i++){
  var randomName = faker.fake("{{name.firstName}}, {{name.lastName}}");
  names.push({name: randomName});
}

//Function to Create groups
function groupNames(list, howMany) {
  var idx = 1
  var result = []

  while (idx < list.length) {
    if (idx % howMany === 1) result.push([])
    result[result.length - 1].push(list[idx++])
  }

  return result
}

//Create groups
var chunkSize = Math.floor(names.length/4);
var groups = groupNames(names, chunkSize);

app.get('/', (req, res) => {
  res.json(groups);
})

app.listen(3333);