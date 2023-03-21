function solve(count, type, dayOfWeek) {
  let sum = 0;

  switch (dayOfWeek) {
    case "Friday":
      switch (type) {
        case "Students":
          sum = count * 8.45;
          break;
        case "Business":
          sum = count * 10.9;
          break;
        case "Regular":
          sum = count * 15;
          break;
      }
      break;
    case "Saturday":
      switch (type) {
        case "Students":
          sum = count * 9.8;
          break;
        case "Business":
          sum = count * 15.6;
          break;
        case "Regular":
          sum = count * 20;
          break;
      }
      break;
    case "Sunday":
      switch (type) {
        case "Students":
          sum = count * 10.46;
          break;
        case "Business":
          sum = count * 16;
          break;
        case "Regular":
          sum = count * 22.5;
          break;
      }
      break;
  }
  if (type == "Students" && count >= 30) {
    sum *= 0.85;
  }
  if (type == "Business" && count >= 100) {
    count -= 10;
    switch (dayOfWeek) {
      case "Friday":
        sum = count * 10.9;
        break;
      case "Saturday":
        sum = count * 15.6;
        break;
      case "Sunday":
        sum = count * 16;
        break;
    }
  }

  if (type == "Regular" && count >= 10 && count <= 20) {
    sum *= 0.95;
  }
  console.log(`Total price: ${sum.toFixed(2)}`);
}

// solve(30, "Students", "Sunday");
// solve(40, "Regular", "Saturday");
// solve(110, "Business", "Sunday");
solve(10, "Regular", "Saturday");
