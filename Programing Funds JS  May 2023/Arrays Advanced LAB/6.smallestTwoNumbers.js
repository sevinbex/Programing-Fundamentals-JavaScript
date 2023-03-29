function smallest2Numbers(array) {
  let sortedInAscending = array.sort((a, b) => a - b);
  console.log(sortedInAscending.slice(0, 2).join(" "));
}

smallest2Numbers([30, 15, 50, 5]);
