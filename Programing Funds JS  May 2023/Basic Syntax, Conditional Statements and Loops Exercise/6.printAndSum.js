function solve(start, end) {
  let sum = 0;
  let output = "";
  for (let i = start; i <= end; i++) {
    if (i === end) {
      output += `${i}`;
    } else {
      output += `${i} `;
    }
    sum += i;
  }
  console.log(`${output}`);
  console.log(`Sum: ${sum}`);
}

solve(5, 10);
