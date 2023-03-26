function charactersInRange(firstChar1, secondChar2) {
  let rangeStart = Math.min(firstChar1.charCodeAt(), secondChar2.charCodeAt());
  let rangeEnd = Math.max(firstChar1.charCodeAt(), secondChar2.charCodeAt());
  let finalString = "";
  for (
    let currentChar = rangeStart + 1;
    currentChar < rangeEnd;
    currentChar++
  ) {
    if (currentChar + 1 == rangeEnd) {
      finalString += String.fromCharCode(currentChar);
    } else {
      finalString += String.fromCharCode(currentChar) + " ";
    }
  }
  console.log(finalString);
}

charactersInRange("#", ":");
charactersInRange(":", "#");
