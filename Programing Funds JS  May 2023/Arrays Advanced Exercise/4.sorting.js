function sorting(array) {
  array.sort((a, b) => b - a);
  let myNewArray = [];
  for (let i = 0; i < array.length; i++) {
    let smaller = array.pop();
    let bigger = array.shift();
    myNewArray.push(bigger);
    myNewArray.push(smaller);
  }
  let smaller = array.pop();
  let bigger = array.shift();
  myNewArray.push(bigger);
  myNewArray.push(smaller);

  console.log(myNewArray.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
