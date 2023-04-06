const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
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
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
