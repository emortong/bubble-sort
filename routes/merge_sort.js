const express = require('express');
const router = express.Router();
const merge_sort = require('../algorithms/merge_sort.js');

router.route('/')
  .post((req,res) => {
    let array = req.body.array;
    let sorted = merge_sort.merge_sort(array);
    console.log(sorted);
    res.send(sorted)
  })

module.exports = router;