function convert(name, lastName, hairColor) {
  let person = {
    name: name,
    lastName: lastName,
    hairColor: hairColor,
  };

  console.log(JSON.stringify(person));
}

convert(
  "George",
  "Jones",

  "Brown"
);
