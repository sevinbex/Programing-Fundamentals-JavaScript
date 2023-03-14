function movieRatings(input) {
  let movieCount = Number(input[0]);
  let highestRating = Number.MIN_VALUE;
  let highName = "";
  let lowestRating = Number.MAX_VALUE;
  let lowestName = "";
  let averageRating = 0;

  for (let i = 1; i <= movieCount * 2; i += 2) {
    let movieName = input[i];
    let movieRating = Number(input[i + 1]);

    averageRating += movieRating;

    if (movieRating > highestRating) {
      highestRating = movieRating;
      highName = movieName;
    }
    if (movieRating < lowestRating) {
      lowestRating = movieRating;
      lowestName = movieName;
    }
  }
  console.log(
    `${highName} is with highest rating: ${highestRating.toFixed(1)}`
  );
  console.log(
    `${lowestName} is with lowest rating: ${lowestRating.toFixed(1)}`
  );
  console.log(`Average rating: ${(averageRating / movieCount).toFixed(1)}`);
}

// movieRatings([
//   "5",
//   "A Star is Born",
//   "7.8",
//   "Creed 2",
//   "7.3",
//   "Mary Poppins",
//   "7.2",
//   "Vice",
//   "7.2",
//   "Captain Marvel",
//   "7.1",
// ]);

movieRatings([
  "3",
  "Interstellar",
  "8.5",
  "Dangal",
  "8.3",
  "Green Book",
  "8.2",
]);
