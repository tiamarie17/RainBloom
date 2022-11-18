const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET router to fetch search results
router.get('/', (req, res) => {

    if (req.isAuthenticated()) {
        console.log('/search GET route');
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
    console.log('in /search POST router');
    console.log('req.body.data is', req.body.data);

    let soil = req.body.data.soil_type;
    let sunlight = req.body.data.sunlight_amount;
    let goals = req.body.data.goals;

    let goalString = (goals.map(goal => (goal + " = TRUE")));
    console.log(goalString);

    goalString = goalString.join(" OR ");
    goalString = `(${goalString});`
    console.log(goalString);

    let baseSql = `SELECT * FROM plants WHERE soil_type = \'${soil}\' AND sunlight_amount = \'${sunlight}\'`;

    let sqlText = `${baseSql} AND ${goalString}`

    console.log('sqlText is', sqlText);

    pool.query(sqlText)
        .then((result) => {
            res.status(200).send(result.rows);
            
        })
        .catch((err) => {
            console.log('in search POST router error, error is', err);
        })

});

module.exports = router;