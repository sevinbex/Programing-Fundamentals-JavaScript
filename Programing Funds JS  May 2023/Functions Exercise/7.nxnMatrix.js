function matrix(number) {
  let array = [];

  for (let i = 1; i <= number; i++) {
    let output = "";
    for (let i = 1; i <= number; i++) {
      output += `${number} `;
    }
    array.push(output);
  }

  console.log(array.join("\n"));
}

matrix(3);
