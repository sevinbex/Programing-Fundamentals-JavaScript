function strSubStr(word, text) {
  const tokens = text.split(" ");
  for (const token of tokens) {
    if (token.toLowerCase() === word.toLowerCase()) {
      console.log(word);
      return;
    }
  }

  console.log(`${word} not found!`);
}

strSubStr(
  "javascript",

  "JavaScript is the best programming language"
);
