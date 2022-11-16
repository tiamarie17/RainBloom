const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');
const multer  = require('multer');
const path = require('node:path');


//storage for image upload--defines where to store image and what the file name will be

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: function (req, file, cb){
      //names file profile_pic-(userid#).jpg
      cb(null, 'plant_pic-'+ req.user.id + file.originalname)
  }
})

const upload = multer({
  storage: storage,
});


router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    console.log('/gallery GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    
    let queryText = `SELECT * FROM "uploads" WHERE "user_id" =$1;`;
    pool.query(queryText, [req.user.id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });

}else {
    res.sendStatus(403);
}
  
});

router.post('/', upload.array('uploaded_file', 12), rejectUnauthenticated, function (req, res) {
       console.log('in /gallery POST router');
       console.log('is authenticated?', req.isAuthenticated());
       console.log('user', req.user);
       console.log('access level', req.user.access_level);

       let base_sqlText = `
    INSERT INTO "uploads" ("image_url")
    VALUES`

    let paths = req.files.map(file => file.path)

    for (let i = 0;  i < req.files.length; i++) {
        
        base_sqlText += `($${i+1})`;

        if(i !== req.files.length-1){
            base_sqlText += ",";
        }else{
            base_sqlText += `WHERE "user_id" = $1;`
        }
    }


    console.log('paths is',paths);

    pool.query(base_sqlText, paths, [req.user.id])
        .then((result)=>{
            res.sendStatus(200);
        })
        .catch((err)=> {
            console.log('in upload POST router error, error is', err);
        })



  //queryText = `` //WHERE "user_id"=$1;

  //queryParams = [req.user.id];
});

module.exports = router;
