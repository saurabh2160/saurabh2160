const express = require('express');
const lodash=require('lodash')

const router = express.Router();

router.get('/hello-me', function (req, res) {
    console.log(lodash.union([1,2,1],[3,5,3],[4,1,5],[5,1,5],[6,5,6]))
    res.send('My first ever api!')
});
module.exports = router;