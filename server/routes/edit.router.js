const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.put('/:id', (req, res) => {
    // Update a note on an individual plant
    const plantId = req.body.id;
    const notes = req.body.notes;
    console.log('notes is', notes);
    console.log('plantId is', plantId);

    const sqlText = `UPDATE "plants_user" SET "notes" = $1 WHERE "plants_user"."plant_id" = $2`;
    pool.query(sqlText, [notes, plantId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;