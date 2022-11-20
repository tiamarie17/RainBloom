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

    console.log('req.body.data.id is,', req.body.data.id);
    console.log('req.user.id is', req.user.id);

    let sqlText =   `
        INSERT INTO "plant_garden" ("plant_id", "user_"id)
        VALUES ($1, $2);
    `;

    sqlParams = [req.body.id, req.user.id];
    

    pool.query(sqlText, sqlParams)
        .then((result) => {
            res.sendStatus(200);
            
        })
        .catch((err) => {
            console.log('in search POST router error, error is', err);
        })

});

module.exports = router;