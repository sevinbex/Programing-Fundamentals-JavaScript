function shoppingList(array) {
  let listArray = array.shift();
  let rawlist = listArray.split("!");
  let command = array.shift().split(" ");

  while (command[0] != "Go") {
    let action = command[0];
    let product = command[1];
    let indexOfproduct = 0;
    includesInList = false;

    for (let i = 0; i < rawlist.length; i++) {
      if (product == rawlist[i]) {
        indexOfproduct = rawlist.indexOf(product);
        includesInList = true;
        break;
      }
    }
    switch (action) {
      case "Urgent":
        if (includesInList) {
          break;
        } else {
          rawlist.unshift(product);
        }
        break;
      case "Unnecessary":
        if (includesInList) {
          rawlist.splice(indexOfproduct, 1);
        } else {
          break;
        }
        break;
      case "Correct":
        if (includesInList) {
          rawlist.splice(indexOfproduct, 1, command[2]);
        } else {
          break;
        }
        break;
      case "Rearrange":
        if (includesInList) {
          rawlist.splice(indexOfproduct, 1);
          rawlist.push(product);
        } else {
          break;
        }
    }
    command = array.shift().split(" ");
  }
  console.log(rawlist.join(", "));
}
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",

  "Urgent Salt",

  "Unnecessary Grapes",

  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
