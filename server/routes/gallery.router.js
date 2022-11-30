const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const multer = require('multer');
const path = require('node:path');


//storage for image upload--defines where to store image and what the file name will be

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: function (req, file, cb) {
    //names file profile_pic-(userid#).jpg
    cb(null, 'plant_pic-' + req.user.id + file.originalname)
  }
})

const upload = multer({
  storage: storage,
});


// router.get('/', (req, res) => {
//   if (req.isAuthenticated()) {
//     console.log('/gallery GET route');
//     console.log('is authenticated?', req.isAuthenticated());
//     console.log('user', req.user);

//     let queryText = `SELECT * FROM "uploads" WHERE "user_id" =$1;`;
//     pool.query(queryText, [req.user.id]).then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log(error);
//         res.sendStatus(500);
//     });

// }else {
//     res.sendStatus(403);
// }

// });

router.get('/', async (req, res) => {
  console.log('/gallery GET route');
  console.log('is authenticated?', req.isAuthenticated());
  if (req.isAuthenticated) {
    try {
      let sqlText = `SELECT * FROM "uploads" WHERE "user_id" =$1;`;
      let sqlParams = [req.user.id];

      let dbRes = await pool.query(sqlText, sqlParams);
      res.send(dbRes.rows);
    }

    catch (err) {
      console.error('GET /gallery error', err);
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(401);
  }
})



router.post('/', rejectUnauthenticated, upload.single('uploaded_file'), function (req, res) {
  console.log('in /gallery POST router');
  console.log('is authenticated?', req.isAuthenticated());
  console.log('user', req.user);
  console.log('req.files is', req.files);
  console.log('req.body is', req.body);
  console.log('req.body.description is', req.body.description);


  let sqlText = `
            INSERT INTO "uploads" ("image_url", "user_id", "description")
            VALUES ($1, $2, $3);
       `;

  let sqlParams = [req.file.path, req.user.id, req.body.description]


  // Allow an array of any number of images between 1-12 to be inserted into separate rows
  //Send user id in the paths variable as well

  // let sqlText = `
  // INSERT INTO "uploads" ("image_url", "user_id")
  // VALUES`

  // let sqlParams = req.files.map(file => file.path)

  // for (let i = 0;  i < req.files.length; i++) {

  //     sqlText += `($${i+1}, ${req.user.id})`;

  //     if(i !== req.files.length-1){
  //         sqlText += ",";
  //     }else{
  //         sqlText += `;`;
  //     }
  // }



  pool.query(sqlText, sqlParams)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('in upload POST router error, error is', err);
    })

});


//Delete an image from the gallery if it's something the logged in user added

router.delete('/:id', (req, res) => {
  console.log('in delete router');

  if (req.isAuthenticated()) {
    const sqlText = `
    DELETE FROM "uploads"
    WHERE "id" = $1;
    `;

    pool.query(sqlText, [req.params.id])
      .then(result => res.sendStatus(200))
      .catch(err => res.sendStatus(500));
  } else {
    res.sendStatus(401);
  }
});


module.exports = router;
