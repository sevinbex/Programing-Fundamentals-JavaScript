function cities(current) {
  for (const element of Object.keys(current)) {
    console.log(`${element} -> ${current[element]}`);
  }
}

cities({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
