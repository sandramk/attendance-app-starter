//npm dependencies
const express = require ('express');
const path = require ('path');
const ejs = require ('ejs');

const app = express();
const bodyParser = require('body-parser');

//set our views directory
app.use(express.static('assets'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

//add routes
const attendanceRoutes = require('./routes/names');

app.use('/names', attendanceRoutes);
app.use('/*', function(req, res, next){
  res.redirect('/names');
});

const port = 3060;
app.listen(port, () => console.log(`Server listening on: ${port}`));
