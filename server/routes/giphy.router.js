const express = require('express');
const axios = require('axios');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:search', (req, res) => {
    // return all categories
    // console.log('this is req.body:', req.body);
    // console.log('this is req.body.searchInput', req.body.searchInput);
    console.log('this is req.params', req.params);
    axios
        .get(
            `http://api.giphy.com/v1/gifs/search?q=${req.params.search}&api_key=${process.env.GIPHY_API_KEY}&limit=10`
            )
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });

})


module.exports = router;