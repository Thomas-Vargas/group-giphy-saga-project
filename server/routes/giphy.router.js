const express = require('express');
const axios = require('axios');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // return all categories
    axios
        .get(
            `http://api.giphy.com/v1/gifs/search?q=dogs&api_key=${process.env.GIPHY_API_KEY}&limit=10`
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