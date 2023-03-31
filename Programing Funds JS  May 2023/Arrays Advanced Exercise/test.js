let array = [1, "2", "2", "4", "2", "2", 2, 9];

let firstPart = array.splice(1, 5); // input= number:4,detonation:2 - index = 3

console.log(array.join(" "));
console.log("_________________________________");

let array2 = ["1", "7", "7", 1, 2, 3];

array2.splice(0, 3); // input 7,1 - index = 2

console.log(array2.join(" "));
