function reverseArrayNumbers(count, array) {
  let reverseArray = [];

  for (let i = 0; i <= count - 1; i++) {
    reverseArray[count - 1 - i] = array[i];
  }
  //   console.log(reverseArray.join(" "));
  let result = "";
  for (let i = 0; i <= count - 1; i++) {
    if (i < count - 1) {
      result += reverseArray[i] + " ";
    } else {
      result += reverseArray[i];
    }
  }
  console.log(result);
}
reverseArrayNumbers(3, [10, 20, 30, 40, 50]);
