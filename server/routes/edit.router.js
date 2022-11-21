const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('in edit PUT route');
    // Update a note on an individual plant
    console.log('req.params is', req.params);
    console.log('req.body is', req.body);

    const sqlText = `UPDATE "plants_user" SET "notes" = $1 WHERE "plants_user"."plant_id" = $2`;
    pool.query(sqlText)
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;