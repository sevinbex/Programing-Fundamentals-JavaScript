function rw(words, text) {
  text = ` ${text} `;
  const wordsArray = words.split(", ");
  wordsArray.forEach((word) => {
    const match = ` ${"*".repeat(word.length)} `;
    text = text.replace(match, ` ${word} `);
  });
  console.log(text.trim());
}

rw(
  "great",

  "softuni is ***** place for learning new programming languages"
);
