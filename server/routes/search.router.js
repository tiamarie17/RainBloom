const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

// GET router to fetch search results
router.get('/', (req, res) => {

    if (req.isAuthenticated()) {
      console.log('/search GET route');
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

  //POST router to send search results to database
  //Conditional rendering to look for matching search results

  router.post('/', rejectUnauthenticated, function (req, res) {
    console.log('in /search POST router');

     let sqlText;

     pool.query(sqlText, paths)
     .then((result)=>{
         res.sendStatus(200);
     })
     .catch((err)=> {
         console.log('in search POST router error, error is', err);
     })

});

  module.exports = router;