function tracker(wordsArray) {
  let trackedWords = {};

  const words = wordsArray.shift().split(" ");

  //   console.log(words);

  for (const word of words) {
    trackedWords[word] = 0;
  }

  for (const currentWord of wordsArray) {
    if (trackedWords.hasOwnProperty(currentWord)) {
      trackedWords[currentWord]++;
    }
  }

  let sortedWords = Object.entries(trackedWords).sort((a, b) => b[1] - a[1]);
  for (const [word, times] of sortedWords) {
    console.log(`${word} - ${times}`);
  }
}

tracker([
  "is the",

  "first",
  "sentence",
  "Here",
  "is",

  "another",
  "the",
  "And",
  "finally",
  "the",

  "the",
  "sentence",
]);
