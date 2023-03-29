function products(array) {
  let sorted = array.sort();

  for (let i = 0; i < sorted.length; i++) {
    console.log(`${i + 1}.${sorted[i]}`);
  }
}

products(["Potatoes", "Tomatoes", "Onions", "Apples"]);
products(["Watermelon", "Banana", "Apples"]);
