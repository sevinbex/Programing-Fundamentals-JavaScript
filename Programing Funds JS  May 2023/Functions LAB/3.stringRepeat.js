function stringRepeat(string, repeat) {
  let finalString = "";
  for (let i = 1; i <= repeat; i++) {
    finalString += string;
    // return finalString;
  }
  return finalString;
}

stringRepeat("abc", 3);
