const express = require('express');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  let result={
    "indexName":"Health care",
    "indexValue":8,
    "places":[
      {
        "name":"Hospital",
        "value":8
      },{
        "name":"Clinic",
        "value":3
      }
    ]
  }

  result.indexValue=10;
  result.places.push({"name":"School","count":5});
  res.send(result);
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);