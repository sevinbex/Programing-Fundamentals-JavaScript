function oddOccurences(words) {
  let wordsArray = words.split(" ").map((w) => w.toLowerCase());
  //   console.log(wordsArray);
  let result = {};
  for (const word of wordsArray) {
    if (!result.hasOwnProperty(word)) {
      result[word] = 0;
    }
    result[word]++;
  }

  let resultArray = Object.entries(result);
  //   console.log(resultArray);
  resultArray.sort((a, b) => b[1] - a[1]);
  //   console.log(resultArray);

  let lastResult = "";
  for (const arr of resultArray) {
    if (arr[1] % 2 != 0) {
      lastResult += arr[0] + " ";
    }
  }
  console.log(lastResult);
}

oddOccurences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
