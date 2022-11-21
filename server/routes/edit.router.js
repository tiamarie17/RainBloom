const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//PUT request to update note on plant clicked on
router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('in edit PUT route');
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


//POST router to post a new note
router.post('/', (req, res) => {
    console.log(req.body);
    const notes = req.body.notes;
    const sqlText = `INSERT INTO "plants_user" ("notes") VALUES ($1)`;


    pool.query(sqlText, [notes])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});


module.exports = router;