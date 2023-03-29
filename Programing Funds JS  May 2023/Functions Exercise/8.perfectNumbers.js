function perfect(number) {
  if (
    number == 6 ||
    number == 28 ||
    number == 496 ||
    number == 8128 ||
    number == 33550336 ||
    number == 8589869056 ||
    number == 137438691328
  ) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
perfect(6);
