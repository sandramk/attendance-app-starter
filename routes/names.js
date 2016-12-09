const express = require ('express');
const router = express.Router();

//people is an associative array of objects, with properties name and number
const people = [ {name: ' ', num: } ];

router.get('/', function(req, res, next) {
//need to render both names and number
  res.render('names.ejs', {
    peopleRendered: people
  });
});







router.post('/', function(req, res, next) {
//store input in newName variable
  const newName = req.body.name;

let foundPerson;
console.log("making a post request");
// for (var i = 0; i <= people.length; i++) {
// console.log("people loop");

  if (people.length === 0) {
    foundPerson.name = newName;
    foundPerson.num = 0;
  }
  //won't work without the loop
  if (people[i].name === newName) {
    foundPerson = people[i];
  }
  if (!foundPerson) {
    foundPerson={name: newName, num: 0};
    people.push(foundPerson);
  }
  foundPerson.num += 1;
// }
res.redirect('/names');
});

module.exports = router;
