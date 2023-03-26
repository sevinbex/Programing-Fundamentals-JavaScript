function orders(product, count) {
  let sum = 0;

  switch (product) {
    case "coffee":
      sum = count * 1.5;
      break;
    case "water":
      sum = count;
      break;
    case "coke":
      sum = count * 1.4;
      break;
    case "snacks":
      sum = count * 2;
      break;
  }
  console.log(sum.toFixed(2));
}

orders("water", 5);
orders("coffee", 2);
