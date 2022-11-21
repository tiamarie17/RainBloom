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

    let array = [];

    //adding onto SQL string if the goals array contains certain goals
    if (goals.includes('Butterflies')){
        array.push('Butterflies = True');
    }

    if (goals.includes('Hummingbirds')){
        array.push('Hummingbirds = True');
    }
    if (goals.includes('Pollinators')){
        array.push('Pollinators = True');
    }

    if (goals.includes('deerresistant')){
        array.push('deerresistant = True');
    }
    if (goals.includes('Birds')){
        array.push('Birds = True');
    }

    //separating string with "OR"

    arrayString = array.join(" OR ");
    console.log('arrayString is', arrayString);

    sqlText += arrayString + ');';
    console.log('sqlText is', sqlText);


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