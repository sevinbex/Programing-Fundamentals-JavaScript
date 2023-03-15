function solve(day, age) {
  let sum = 0;
  switch (day) {
    case "Weekday":
      if (0 <= age && age <= 18) {
        sum += 12;
      } else if (18 < age && age <= 64) {
        sum += 18;
      } else if (64 < age && age <= 122) {
        sum += 12;
      } else {
        console.log("Error!");
        return;
      }
      break;
    case "Weekend":
      if (0 <= age && age <= 18) {
        sum += 15;
      } else if (18 < age && age <= 64) {
        sum += 20;
      } else if (64 < age && age <= 122) {
        sum += 15;
      } else {
        console.log("Error!");
        return;
      }
      break;
    case "Holiday":
      if (0 <= age && age <= 18) {
        sum += 5;
      } else if (18 < age && age <= 64) {
        sum += 12;
      } else if (64 < age && age <= 122) {
        sum += 10;
      } else {
        console.log("Error!");
        return;
      }
      break;
  }
  console.log(`${sum}$`);
}

// solve("Weekend", 77);
solve("Holiday", -15);
