function commonElements(array1, array2) {
  for (let i = 0; i <= array1.length - 1; i++) {
    let currentItem = array1[i];

    if (array2.includes(currentItem)) {
      console.log(currentItem);
    }
  }
}

// commonElements(
//   ["Hey", "hello", 2, 4, "Peter", "e"],

//   ["Petar", 10, "hey", 4, "hello", "2"]
// );
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],

  ["s", "o", "c", "i", "a", "l"]
);
