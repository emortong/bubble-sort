const express = require('express');
const router = express.Router();
const selection_sort = require('../algorithms/selection_sort.js');

router.route('/')
  .post((req,res) => {
    let array = req.body.array;
    let sorted = selection_sort.selection_sort(array);
    console.log(sorted);
    res.send(sorted)
  })

module.exports = router;