const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const axios = require('axios');
require('dotenv').config();


// GET router to fetch plants selected
router.get('/', (req, res) => {

    if (req.isAuthenticated()) {
        console.log('in mygarden GET route');
        console.log('is authenticated?', req.isAuthenticated());
        console.log('user', req.user);

        let sqlText = `
                    
            SELECT "plants"."common_name", "plants"."botanical_name", "plants"."image", "plants"."soil_type", "plants"."spacing", 
            "plants"."inundation_amount", "plants"."plant_location", "plants"."sunlight_amount", "plants"."id", "plants_user"."notes" 
            FROM "plants" 
            JOIN "plants_user" ON "plants"."id" = "plants_user"."plant_id"
            JOIN "user" ON "user"."id" = "plants_user"."user_id"
            WHERE "user"."id" = $1;`;

        let sqlParams = [req.user.id];

        pool.query(sqlText, sqlParams)

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

//POST router to send selected plant to database

router.post('/', rejectUnauthenticated, function (req, res) {
    console.log('in /mygarden POST router');
    console.log('req.body.data is', req.body.data);

    console.log('plant _id is,', req.body.data.id);
    console.log('user_id', req.user.id);

    let sqlText = `
        INSERT INTO "plants_user" ("plant_id", "user_id")
        VALUES ($1, $2);
    `;

    sqlParams = [req.body.data.id, req.user.id];


    pool.query(sqlText, sqlParams)
        .then((result) => {
            res.sendStatus(200);

        })
        .catch((err) => {
            console.log('in mygarden POST router error, error is', err);
        })

});


//Delete a plant from My Garden
router.delete('/:id', (req, res) => {
    console.log('in /mygarden DELETE router');
    console.log('req.params.id is', req.params.id);

    if (req.isAuthenticated()) {
        const sqlText = `
    DELETE FROM "plants_user"
    WHERE "plants_user"."plant_id" = $1;
    `;

        const sqlParams = [req.params.id];

        pool.query(sqlText, sqlParams)
            .then((result) => {
                res.sendStatus(200)
            })
            .catch((err) => {
                console.log('in delete my garden error, error is', err);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(401);
    }
});


//Weather API router
router.get('/weather', (req, res) => {
    console.log('in weather router');
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: '44.986656, -93.258133' },
        headers: {
            'X-RapidAPI-Key': process.env.KEY,
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log('response.data is', response.data);

        let weatherObject = {
            temperature: response.data.current.temp_f,
            text: response.data.current.condition.text,
            icon: response.data.current.condition.icon,
            windMph: response.data.current.wind_mph
        }
        console.log('weather object is', weatherObject);

        res.send(weatherObject);

    }).catch(function (error) {
        console.error('Weather API request failed, error is', error);
    });
})

module.exports = router;




module.exports = router;

