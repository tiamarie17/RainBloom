const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//POST router to send  and retrieve search results to database

router.post('/', rejectUnauthenticated, function (req, res) {
    console.log('in /search POST router');
    console.log('req.body.data is', req.body.data);
    let sunlight = req.body.data.sunlight_amount;
    let soil = req.body.data.soil_type;


    //mapping through goal array and removing strings so that it is a boolean value
    let goals = req.body.data.goals.map(goal => goal.replace('\'', ""));

    //declaring index value, adding placeholders starting at $3 for goals in array
    //incrementing index so that number of placeholders is reponsive to number of items in array
    let index = 3
    let goalString = (goals.map(goal => ("$" + index++  + " = TRUE")));
    console.log(goalString);

    //
    goalString = goalString.join(" OR ");
    goalString = `(${goalString});`
    console.log(goalString);

    let baseSql = `SELECT * FROM plants WHERE soil_type = $1 AND sunlight_amount = $2`;

    // sql = `
    // ///......
    // AND Butterflies = $1
    // AND Banans = $2
    // `
    // params = [goal.contains('Butterflies'), goals.contains('bananas')];

    let sqlText = `${baseSql} AND ${goalString}`

    // if (goals.contains('Butterflies')) {
    //     sqlText += 'OR Butterflies = True'
    // }
    // ...

    console.log('sqlText is', sqlText);

    let sqlParams = [soil, sunlight].concat(goals);

    pool.query(sqlText, sqlParams)
        .then((result) => {
            res.status(200).send(result.rows);
            
        })
        .catch((err) => {
            console.log('in search POST router error, error is', err);
        })

});

module.exports = router;