function solve(char) {
  let asciiValue = char.charCodeAt();

  console.log(asciiValue);

  if (asciiValue >= 65 && asciiValue <= 90) {
    console.log("upper-case");
  } else {
    console.log("lower-case");
  }
}

solve("S");
