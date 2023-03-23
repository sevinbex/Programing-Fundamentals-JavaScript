function rotation(array, count) {
  let counter = 0;
  for (let i = 0; i <= count - 1; i++) {
    let curNum = array[i];
    array.push(curNum);
    array.shift();
    counter += 1;
    i = -1;
    if (counter == count) {
      break;
    }
  }

  console.log(array.join(" "));
}

rotation([51, 47, 32, 61, 21], 2);
rotation([32, 21, 61, 1], 4);
