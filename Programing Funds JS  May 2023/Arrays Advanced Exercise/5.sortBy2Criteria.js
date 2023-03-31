function sortBy2(array) {
  let sortedArray = array.sort((a, b) => {
    return a.length - b.length || a - b;
  });

  console.log(sortedArray.join("\n"));
}

// sortBy2(["alpha", "beta", "gamma"]);
sortBy2(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
