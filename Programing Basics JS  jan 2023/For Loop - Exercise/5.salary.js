function salary(input) {
  let OpenTabCount = Number(input[0]);
  let salary = Number(input[1]);
  // let n = input.length - 2

  for (let i = 0; i <= input.length - 2; i++) {
    let currentTab = input[i + 2];
    switch (currentTab) {
      case "Facebook":
        salary -= 150;
        break;
      case "Instagram":
        salary -= 100;
        break;
      case "Reddit":
        salary -= 50;
        break;
    }
  }
  if (salary <= 0) {
    console.log(`You have lost your salary.`);
  } else {
    console.log(salary);
  }
}

salary([
  "10",

  "750",

  "Facebook",

  "Dev.bg",

  "Instagram",

  "Facebook",

  "Reddit",

  "Facebook",

  "Facebook",
]);
