function minerTask(input) {
  let elements = {};

  for (let index = 0; index < input.length; index += 2) {
    let currentElement = input[index];
    let quantity = Number(input[index + 1]);

    if (!elements.hasOwnProperty(currentElement)) {
      elements[currentElement] = 0;
    }
    elements[currentElement] += quantity;
  }
  for (const element in elements) {
    console.log(`${element} -> ${elements[element]}`);
  }
}

minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
// minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
