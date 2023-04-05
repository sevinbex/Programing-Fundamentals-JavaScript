function inventory(input) {
  let items = input.shift().split(", ");

  for (let i = 0; i < input.length - 1; i++) {
    let command = input[i].split(" - ");
    let action = command[0];
    let item = command[1];
    let isExist = false;
    switch (action) {
      case "Collect":
        items.map((el) => {
          if (el == item) {
            isExist = true;
          }
        });

        if (!isExist) {
          items.push(item);
        }

        break;
      case "Drop":
        for (let j = 0; j < items.length; j++) {
          if (items[j] == item) {
            items.splice(j, 1);
            break;
          }
        }
        break;
      case "Combine Items":
        let splittedItem = item.split(":");
        let itemToChange = splittedItem[0];
        let newItem = splittedItem[1];
        for (let k = 0; k < items.length; k++) {
          if (itemToChange == items[k]) {
            items.splice(k + 1, 0, newItem);
            break;
          }
        }
        break;
      case "Renew":
        for (let l = 0; l < items.length; l++) {
          if (item == items[l]) {
            let toGoEnd = items.splice(l, 1);
            items.push(toGoEnd[0]);
            break;
          }
        }
        break;
    }
  }

  console.log(items.join(", "));
}

inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
// inventory([
//   "Iron, Sword",
//   "Drop - Bronze",
//   "Combine Items - Sword:Bow",
//   "Renew - Iron",
//   "Craft!",
// ]);
