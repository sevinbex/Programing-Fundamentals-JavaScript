function shopList(input) {
  let list = input.shift().split("!");
  let command = input.shift();
  while (command != "Go Shopping!") {
    let tokens = command.split(" ");

    switch (tokens[0]) {
      case "Unnecessary":
        Unnecessary(tokens[1]);
        break;
      case "Urgent":
        Urgent(tokens[1]);
        break;
      case "Correct":
        Correct(tokens[1], tokens[2]);
        break;
      case "Rearrange":
        Rearrange(tokens[1]);
        break;
    }

    command = input.shift();
  }

  function Unnecessary(unnProduct) {
    if (list.includes(unnProduct)) {
      list.splice(list.indexOf(unnProduct), 1);
    }
  }

  function Urgent(urgProduct) {
    if (!list.includes(urgProduct)) {
      list.unshift(urgProduct);
    }
  }

  function Correct(oldProduct, newProduct) {
    if (list.includes(oldProduct)) {
      let corrIndex = list.indexOf(oldProduct);
      list[corrIndex] = newProduct;
    }
  }

  function Rearrange(rearrProduct) {
    if (list.includes(rearrProduct)) {
      let currentItem = list.splice(list.indexOf(rearrProduct), 1);
      list.push(currentItem);
    }
  }

  console.log(list.join(", "));
}

// shopList([
//   "Tomatoes!Potatoes!Bread",
//   "Unnecessary Milk",
//   "Urgent Tomatoes",
//   "Go Shopping!",
// ]);

shopList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
