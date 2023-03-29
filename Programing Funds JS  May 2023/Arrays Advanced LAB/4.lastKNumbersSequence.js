function lastK(n, k) {
  let myArray = [1];

  for (let i = 1; i < n; i++) {
    let index = Math.max(myArray.length - k, 0);
    let lastElements = myArray.slice(index);
    let sum = 0;

    for (let element of lastElements) {
      sum += element;
    }
    myArray.push(sum);
  }
  console.log(myArray.join(" "));
}

lastK(6, 3);
