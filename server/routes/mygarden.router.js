const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET router to fetch plants selected
router.get('/', (req, res) => {

    if (req.isAuthenticated()) {
        console.log('/mygarden GET route');
        console.log('is authenticated?', req.isAuthenticated());
        console.log('user', req.user);

        //query text

        pool.query(queryText, [req.user.id])
        
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });

    } else {
        res.sendStatus(403);
    }

});

//POST router to send search results to database

router.post('/', rejectUnauthenticated, function (req, res) {
    console.log('in /mygarden POST router');
    console.log('req.body.data is', req.body.data);

    //query text here

    pool.query(sqlText)
        .then((result) => {
            res.sendStatus(200);
            
        })
        .catch((err) => {
            console.log('in search POST router error, error is', err);
        })

});

module.exports = router;