function solve(input) {
  let savedMoney = 0;
  let months = 1;
  let journeyMoney = Number(input.shift());
  let numberOfMonths = Number(input.shift());

  while (months <= numberOfMonths) {
    if (months % 2 !== 0 && months !== 1) {
      savedMoney -= savedMoney * 0.16;
    }

    if (months % 4 == 0) {
      savedMoney += savedMoney * 0.25;
    }
    savedMoney += journeyMoney * 0.25;
    months++;
  }

  if (savedMoney >= journeyMoney) {
    let money = (savedMoney - journeyMoney).toFixed(2);
    console.log(
      `Bravo! You can go to Disneyland and you will have ${money}lv. for souvenirs.`
    );
  } else {
    let money = (journeyMoney - savedMoney).toFixed(2);
    console.log(`Sorry. You need ${money}lv. more.`);
  }
}
