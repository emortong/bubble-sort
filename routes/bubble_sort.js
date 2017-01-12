const express = require('express');
const router = express.Router();
const bubble = require('../algorithms/bubble_sort.js');

router.route('/')
  .post((req,res) => {
    let array = req.body.array;
    let sorted = bubble.bubbleSort(array);
    console.log(sorted);
    res.send(sorted)
  })

module.exports = router;