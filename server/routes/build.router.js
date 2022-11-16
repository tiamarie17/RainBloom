const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
      console.log('/build GET route');
      console.log('is authenticated?', req.isAuthenticated());
      console.log('user', req.user);
      
     //query text

      pool.query(queryText, [req.user.id]).then((result) => {
          res.send(result.rows);
      }).catch((error) => {
          console.log(error);
          res.sendStatus(500); 
      });
  
  }else {
      res.sendStatus(403);
  }
    
  });

  module.exports = router;