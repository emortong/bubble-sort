const express = require('express');
const exphbs = require('express-handlebars')
const bubblesort = require('./routes/bubble_sort');
const quicksort = require('./routes/quick_sort');
const mergesort = require('./routes/merge_sort')
const insertionsort = require('./routes/insertion_sort')
const selectionsort = require('./routes/selection_sort')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(express.static('public'));

app.use('/bubblesort', bubblesort);
app.use('/quicksort', quicksort);
app.use('/mergesort', mergesort);
app.use('/insertionsort', insertionsort);
app.use('/selectionsort', selectionsort);

app.set('view engine', '.hbs');

app.engine('.hbs', exphbs({
  extname:'.hbs',
  defaultLayout:'main',
}))

if(!module.parent) {
  app.listen(4000, () => {
    console.log('Server started on port 4000')
  });
}

module.exports = app;