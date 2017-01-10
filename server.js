const express = require('express');
const exphbs = require('express-handlebars')
const bubble = require('./routes/bubble');
const quick_sort = require('./routes/quick_sort');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(express.static('public'));

app.use('/bubble', bubble);
app.use('/quick_sort', quick_sort);

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