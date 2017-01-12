const express = require('express');
const router = express.Router();
const insertion_sort = require('../algorithms/insertion_sort.js');

router.route('/')
  .post((req,res) => {
    let array = req.body.array;
    let sorted = insertion_sort.insertion_sort(array);
    console.log(sorted);
    res.send(sorted)
  })

module.exports = router;