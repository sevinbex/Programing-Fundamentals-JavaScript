function centToMin(num) {
  let years = num * 100;
  let days = Math.trunc(years * 365.2422);
  let hours = 24 * days;
  let minutes = hours * 60;

  console.log(
    `${num} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`
  );
}

centToMin(1);
