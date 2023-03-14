function oscars(input) {
  let rent = Number(input[0]);
  let statues = rent * 0.7;
  let cattering = statues * 0.85;
  let sound = cattering * 0.5;

  let totalSum = rent + statues + cattering + sound;

  console.log(totalSum.toFixed(2));
}

oscars(["5555"]);
