var people = [
  { "name": "bob", "dinner": "pizza" },
  { "name": "john", "dinner": "sushi" },
  { "name": "larry", "dinner": "hummus" }
];

console.log(people.filter(function (person) { return person.dinner == "sushi" }));