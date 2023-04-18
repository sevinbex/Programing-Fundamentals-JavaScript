function storagedddddd(list) {
  let storage = new Map();

  for (const line of list) {
    let [product, quantity] = line.split(" ");
    quantity = Number(quantity);

    if (storage.has(product)) {
      quantity += storage.get(product);
    }

    storage.set(product, quantity);
  }

  for (const [item, quantity] of storage) {
    console.log(`${item} -> ${quantity}`);
  }
}

storagedddddd(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
