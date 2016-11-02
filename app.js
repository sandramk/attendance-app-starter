//npm dependencies
const express = require ('express');
const bodyParser = require('body-parser');
const path = require ('path');
const ejs = require ('ejs');

const app = express();


//set our views directory
app.use(express.static('assets'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//add middleware
app.use(bodyParser.urlencoded({ extended: false }));

const names = require('./routes/names');

app.use('/names', names);
app.use('/*', function(req, res, next){
  res.redirect('/names');
});

const port = 3000;
app.listen(port, () => console.log(`Server listening on: ${port}`));
