function distincArray(array) {
  let myNewArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!myNewArray.includes(array[i])) {
      myNewArray.push(array[i]);
    }
  }
  console.log(myNewArray.join(" "));
}

distincArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
