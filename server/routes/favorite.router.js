const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  //get all favorites data
  const queryText = `SELECT * FROM "favorites";`;
  
  pool.query(queryText)
    .then(result => {
      console.log('Result data',result.rows);
      res.send(result.rows);
    })
    .catch(error => {
      console.log(error);
    })
  // res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  // console.log('This is req.body', req.body)
  let giphyItem = req.body
  const queryText = `INSERT INTO "favorites" ("name", "url")
  VALUES ($1, $2)`
  pool.query(queryText, [giphyItem.title, giphyItem.images.original.url])
  .then((result) => {
    console.log('Successful POST request for favoriting dog images specifically')
    res.sendStatus(201)
  })
  .catch((error) => {
    console.log('Error making database query(POST) for dogs', error)
    res.sendStatus(500)
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  console.log('req.body in gif put request:', req.body);
  const sqlText = `UPDATE "favorites" SET category_id = ${req.body.category} WHERE favorites.id = ${req.params.favId};`;
  
  pool.query(sqlText)
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    })

});

// delete a favorite
router.delete('/', (req, res) => {
  const deleteId = req.params.id;
  queryText = `DELETE FROM "favorites" WHERE id=$1`
  pool.query(queryText, [deleteId])
  .then((result) => {
    console.log('Successful DELETE request')
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log('Error making database query DELETE', error)
    res.sendStatus(500)
  })

});

module.exports = router;
