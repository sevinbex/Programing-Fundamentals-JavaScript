function firstAndLast(array) {
  let k = array.shift();
  for (let i = 0; i <= 1; i++) {
    let newArray = array.slice(i, i + k);
    console.log(newArray.join(" "));
  }
}

firstAndLast([2, 7, 8, 9]);

//   firstAndLast([3, 6, 7, 8, 9]);
