function manipulateArr(nums, commands) {
  for (let el of commands) {
    let [command, num1, ...rest] = el.split(" ");
    num1 = Number(num1);
    rest = rest.map(Number);

    switch (command) {
      case "add":
        nums.splice(num1, 0, rest[0]);
        break;
      case "addMany":
        nums.splice(num1, 0, ...rest);
        break;
      case "contains":
        console.log(nums.indexOf(num1));
        break;
      case "remove":
        nums.splice(num1, 1);
        break;
      case "shift":
        // nums = shift(nums);
        shift(num1);
        break;
      case "sumPairs":
        let newArr = [];
        nums = sumPairs(nums, newArr);
        break;
      case "print":
        console.log(`[ ${nums.join(", ")} ]`);
        break;
      default:
        break;
    }
  }

  function shift(shiftAmount) {
    for (let j = 0; j < shiftAmount; j++) {
      // for (let i = 0; i < nums.length - 1; i++) {
      //     let temp = nums[i];
      //     nums[i] = nums[i + 1];
      //     nums[i + 1] = temp;
      // }
      let temp = nums.shift();
      nums.push(temp);
    }
    // return arr;
  }

  function sumPairs(arr, newArr) {
    for (let i = 0; i < arr.length - 1; i = i + 2) {
      let currEl = arr[i];
      let nextEl = arr[i + 1];
      let sum = currEl + nextEl;
      newArr.push(sum);
    }

    if (arr.length % 2 !== 0) {
      newArr.push(arr[arr.length - 1]);
    }
    return newArr;
  }
}
