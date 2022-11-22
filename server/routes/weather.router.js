const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');
require('dotenv').config();

router.get('/', (req, res) => { 
const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: '44.986656, -93.258133'},
        headers: {
          'X-RapidAPI-Key': process.env.KEY,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
          console.log('response.data is', response.data);
          res.send(response.data)
          //To Do: object spelunker stuff
      }).catch(function (error) {
          console.error('Weather API request failed, error is', error);
      });
})

      module.exports = router;