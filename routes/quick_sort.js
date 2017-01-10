const express = require('express');
const router = express.Router();
const quick_sort = require('../algorithms/quick_sort.js');

router.route('/')
  .post((req,res) => {
    let array = req.body.array;
    let sorted = quick_sort.quick_sort(array);
    console.log(sorted);
    res.send(sorted)
  })

module.exports = router;