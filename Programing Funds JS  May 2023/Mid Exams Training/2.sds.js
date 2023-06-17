function shopList(input) {
  let list = input.shift().split("!");
  let command = input.shift();
  let index = 0;
  for (let i = 0; i < input.length; i++) {
    let toDo = input[i].split(" ");
    let token1 = toDo[0];
    let token2 = toDo[1];
    let token3 = toDo[2];
    switch (token1) {
      case "Unnecessary":
        Unnecessary(token2);
        break;
      case "Urgent":
        Urgent(token2);
        break;
      case "Correct":
        Correct(token2, token3);
        break;
      case "Rearrange":
        Rearrange(token2);
        break;
    }
  }
  console.log(list.join(", "));

  function Unnecessary(product) {
    if (list.includes(product)) {
      index = list.indexOf(product);
      list.splice(index, 1);
    } else {
      return;
    }
  }

  function Urgent(product) {
    if (!list.includes(product)) {
      list.unshift(product);
    } else {
      return;
    }
  }

  function Correct(oldProduct, newProduct) {
    if (list.includes(oldProduct)) {
      index = list.indexOf(oldProduct);
      list.splice(index, 1, newProduct);
    } else {
      return;
    }
  }

  function Rearrange(product) {
    if (list.includes(product)) {
      index = list.indexOf(product);
      let product = list.splice(index, 1);
      list.push(product);
    } else {
      return;
    }
  }
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
