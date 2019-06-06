const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const dbConnection = require('./../db/db.js');
// const key = require('./../src/config/unsplash.js');
const app = express();
const port = process.env.port || 3001;

app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/data', (req, res) => {

//   const collections = {
//     LivingRoom : '4872136',
//     Kitchen    : '4872137',
//     Bedroom    : '4872138',
//     Bathroom   : '4872140',
//     Backyard   : '4872142',
//     Pets       : '4872143',
//     Interior   : '4872144',
//     Other      : '4872146',
//   }

//   const search = 'LivingRoom';

//   // fetch(
//   //   `https://api.unsplash.com/collections/${collections[search]}/photos/?client_id=${key.UNSPLASH_API_KEY}`,
//   //   {
//   //     method: 'GET',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     }
//   //   },
//   // )
//   //   .then((res) => res.json())
//   //   .then((data) => {
//   //     for (let i = 0; i < data.length; i++) {
//   //       dbConnection.insertIntoDB(
//   //         data[i].id,
//   //         data[i].likes,
//   //         data[i].user.username,
//   //         data[i].urls.regular,
//   //         search,
//   //       );
//   //     }
//   //     res.send(data);
//   //   });
// });

// send a request body to 'GET' endpoint to figure out what you want to query

app.get('/retrieve', (req, res) => {

  dbConnection.retrieve((data) => {
    res.send(data);
  })
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
