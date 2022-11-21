const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//POST router to send  and retrieve search results to database

router.post('/', rejectUnauthenticated, function (req, res) {
    console.log('in /search POST router');
    console.log('req.body.data is', req.body.data);

    //declaring variables for sqlParams
    let sunlight = req.body.data.sunlight_amount;
    let soil = req.body.data.soil_type;
    let goals = req.body.data.goals;
    console.log('goals is', goals);



    //creating base SQL text with placeholders for soil and sunlight
    let sqlText = 'SELECT * FROM plants WHERE soil_type = $1 AND sunlight_amount = $2 AND (';

    let goalsArray = [];

    //adding onto SQL string if the goals array contains certain goals
    //pushing strings into an array

    if (goals.includes('Butterflies')){
        goalsArray.push('Butterflies = True');
    }

    if (goals.includes('Hummingbirds')){
        goalsArray.push('Hummingbirds = True');
    }
    if (goals.includes('Pollinators')){
        goalsArray.push('Pollinators = True');
    }

    if (goals.includes('deerresistant')){
        goalsArray.push('deerresistant = True');
    }
    if (goals.includes('Birds')){
        goalsArray.push('Birds = True');
    }

    //separating strings in array with the word "OR" 

    goalString = goalsArray.join(" OR ");
    console.log('goalString is', goalString);

    //adding the base sql text to the goals sqltext
    //adding a closing parenthesis at the end of the string

    sqlText += goalString + ');';
    console.log('sqlText is', sqlText);


    //sending soil and sunlight variables as sqlParams
    let sqlParams = [soil, sunlight];
    console.log('sqlParams is', sqlParams);

    pool.query(sqlText, sqlParams)
        .then((result) => {
            res.status(200).send(result.rows);
            
        })
        .catch((err) => {
            console.log('in search POST router error, error is', err);
        })

});

module.exports = router;