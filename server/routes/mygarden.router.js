const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET router to fetch plants selected
router.get('/', (req, res) => {

    if (req.isAuthenticated()) {
        console.log('in mygarden GET route');
        console.log('is authenticated?', req.isAuthenticated());
        console.log('user', req.user);

        let sqlText = `
                    
            SELECT "plants"."common_name", "plants"."botanical_name", "plants"."image", "plants"."soil_type", "plants"."spacing", 
            "plants"."inundation_amount", "plants"."plant_location", "plants"."sunlight_amount", "plants"."id" 
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

//POST router to send search results to database

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

module.exports = router;