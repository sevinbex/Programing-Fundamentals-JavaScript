function oldBooks(input) {
  let index = 0;

  let searchedBook = input[index];
  index++;
  let nextBookChecked = input[index];
  index++;
  let bookCounter = 0;
  while (nextBookChecked !== "No More Books") {
    if (nextBookChecked === searchedBook) {
      console.log(`You checked ${bookCounter} books and found it.`);
      break;
    }

    bookCounter++;
    nextBookChecked = input[index];
    index++;
    if (nextBookChecked === "No More Books") {
      console.log(`The book you search is not here!`);
      console.log(`You checked ${bookCounter} books.`);
    }
  }
}

oldBooks([
  "The Spot",

  "Hunger Games",

  "Harry Potter",

  "Torronto",

  "Spotify",

  "No More Books",
]);
