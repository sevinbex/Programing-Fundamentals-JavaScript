function loadingBar(number) {
  let percentCount = "%".repeat(number / 10);
  let dotCount = ".".repeat(10 - number / 10);

  if (number === 100) {
    console.log("100% Complete!");
    console.log(`[${percentCount}]`);
  } else if (number < 100) {
    console.log();
    console.log(`${number}% [${percentCount}${dotCount}]`);
    console.log("Still loading...");
  }
}

loadingBar(100);
