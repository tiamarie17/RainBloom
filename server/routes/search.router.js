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

    //adding onto SQL string if the goals array contains certain goals
    if (goals[0] = 'Butterflies'){
        sqlText += 'Butterflies = True';

    }else if (goals.includes('Butterflies')){
        sqlText += ' OR Butterflies = True';
    }

    if (goals[0] = 'Hummingbirds'){
        sqlText += 'Hummingbirds = True';

    }else if (goals.includes('Hummingbirds')){
        sqlText += ' OR Hummingbirds = True';
    }
    if (goals[0] = 'Pollinators'){
        sqlText += 'Pollinators = True';

    }else if (goals.includes('Pollinators')){
        sqlText += ' OR Pollinators = True';
    }
    if (goals[0] = 'deerresistant'){
        sqlText += 'deerresistant = True';

    }else if (goals.includes('deerresistant')){
        sqlText += ' OR deerresistant = True';
    }
    if (goals[0] = 'Birds'){
        sqlText += 'Birds = True';

    }else if (goals.includes('Birds')){
        sqlText += ' OR Birds = True';
    }

    sqlText += ')';
    console.log('sqlText is', sqlText);

    // sql = `
    // ///......
    // AND Butterflies = $1
    // AND Banans = $2
    // `
    // params = [goal.contains('Butterflies'), goals.contains('bananas')];

    // let sqlText = `${baseSql} AND ${goalString}`

    // if (goals.contains('Butterflies')) {
    //     sqlText += 'OR Butterflies = True'
    // }
    // ...


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