function maxNumber(array) {
  let newArray = [];

  for (let i = 0; i <= array.length - 1; i++) {
    let isBigger = true;
    let curNum = array[i];

    for (let k = i + 1; k <= array.length - 1; k++) {
      if (curNum <= array[k]) {
        isBigger = false;
      }
    }
    if (isBigger) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray.join(" "));
}

// maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
