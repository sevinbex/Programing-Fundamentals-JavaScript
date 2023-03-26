function palindromeIntegers(array) {
  let numberArraylength = array.length;
  for (let i = 0; i < numberArraylength; i++) {
    let numberAsString = array[i].toString();
    let reversedString = numberAsString.split("").reverse().join("");

    if (numberAsString === reversedString) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}

palindromeIntegers([123, 323, 421, 121]);
