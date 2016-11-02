const express = require ('express');
const router = express.Router();

const people = [];

router.get('/', function(req, res, next) {
  res.render('names.ejs', { people: people
  });
});

router.post('/', function(req, res, next) {
//store input in newName variable
  const newName = req.body.name;
let foundPerson;
for(var i =0; i < people.length; i++) {
  if (people[i].name === newName) {
    foundPerson = people[i];
  }
  if (!foundPerson){
    foundPerson={name: newName, num: 0};
    people.push(foundPerson);
  }
  foundPerson.num += 1;
}
res.redirect('/names');
});

// for (i=0; i < people.length; i++) {
//   if (newName === people[i]) {
//     number = number + 1 ;
//   } else {
//     people.push({ name: newName, number: 1 });
//
//   }
// }
module.exports = router;
