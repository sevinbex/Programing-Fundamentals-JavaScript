function solve(n) {
  let counter = 0;
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
      console.log(i);
      counter += 1;
      sum += i;
    }
    if (counter == n) {
      console.log(`Sum: ${sum}`);
      return;
    }
  }
}

solve(3);
