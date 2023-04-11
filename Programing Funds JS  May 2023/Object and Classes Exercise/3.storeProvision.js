function storeProvision(stock, delivery) {
  const store = {};
  const stockLength = stock.length;
  const deliveryLength = delivery.length;

  for (let index = 0; index < stockLength; index += 2) {
    const currentProduct = stock[index];
    store[currentProduct] = Number(stock[index + 1]);
  }

  for (let index = 0; index < deliveryLength; index += 2) {
    const currentProduct = delivery[index];
    if (!store.hasOwnProperty(currentProduct)) {
      store[currentProduct] = 0;
    }
    store[currentProduct] += Number(delivery[index + 1]);
  }

  for (const product in store) {
    console.log(`${product} -> ${store[product]} `);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
