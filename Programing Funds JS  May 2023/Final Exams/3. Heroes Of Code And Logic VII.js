function hcal(array) {
  let heroes = {};
  let myArray = [];
  let numberOfHeroes = Number(array.shift());

  for (let i = 0; i < numberOfHeroes; i++) {
    let tokens = array[i].split(" ");
    let name = tokens[0];
    let hp = Number(tokens[1]);
    let mana = Number(tokens[2]);

    heroes = { name, hp, mana };
    myArray.push(heroes);
  }

  //   for (const hero of myArray) {
  //     console.log(hero);
  //   }

  for (let i = numberOfHeroes; i < array.length - 1; i++) {
    let nextMove = array[i].split(" - ");
    let action = nextMove.shift();

    switch (action) {
      case "Heal":
        let heroName = nextMove[0];
        let amount = Number(nextMove[1]);
        let result = myArray.find((x) => x.name === heroName);
        let index = myArray.indexOf(result);
        if (myArray[index].hp + amount > 100) {
          let healedFor = 100 - myArray[index].hp;
          myArray[index].hp = 100;
          console.log(`${heroName} healed for ${healedFor} HP!`);
        } else if (myArray[index].hp + amount <= 100) {
          myArray[index].hp += amount;
          console.log(`${heroName} healed for ${amount} HP!`);
        }

        break;
      case "Recharge":
        let charName = nextMove[0];
        let mpAmount = Number(nextMove[1]);
        let resultMp = myArray.find((x) => x.name === charName);
        let indexMp = myArray.indexOf(resultMp);
        if (myArray[indexMp].mana + mpAmount > 200) {
          let healedForMP = 200 - myArray[indexMp].mana;
          myArray[indexMp].mana = 200;
          console.log(`${charName} recharged for ${healedForMP} MP!`);
        } else if (myArray[indexMp].mana + mpAmount <= 200) {
          myArray[indexMp].mana += mpAmount;
          console.log(`${charName} recharged for ${mpAmount} MP!`);
        }

        break;
      case "TakeDamage":
        let heroNameTD = nextMove[0];
        let damage = Number(nextMove[1]);
        let attacker = nextMove[2];
        let resultDmg = myArray.find((x) => x.name === heroNameTD);
        let indexDmg = myArray.indexOf(resultDmg);
        myArray[indexDmg].hp -= damage;
        if (myArray[indexDmg].hp <= 0) {
          myArray.splice(indexDmg, 1);
          console.log(`${heroNameTD} has been killed by ${attacker}!`);
        } else {
          console.log(
            `${heroNameTD} was hit for ${damage} HP by ${attacker} and now has ${myArray[indexDmg].hp} HP left!`
          );
        }
        break;
      case "CastSpell":
        let heroNameCS = nextMove[0];
        let mpNeed = Number(nextMove[1]);
        let spellName = nextMove[2];
        let resultCS = myArray.find((x) => x.name === heroNameCS);
        let indexCS = myArray.indexOf(resultCS);
        if (myArray[indexCS].mana >= mpNeed) {
          myArray[indexCS].mana -= mpNeed;
          console.log(
            `${heroNameCS} has successfully cast ${spellName} and now has ${myArray[indexCS].mana} MP!`
          );
        } else {
          console.log(
            `${heroNameCS} does not have enough MP to cast ${spellName}!`
          );
        }

        break;
    }
  }
  myArray.forEach((element) => {
    console.log(element.name);
    console.log(`  HP: ${element.hp}`);
    console.log(`  MP: ${element.mana}`);
  });
}
hcal([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);

hcal([
  "4",
  "Adela 90 150 ",
  "SirMullich 70 40 ",
  "Ivor 1 111 ",
  "Tyris 94 61 ",
  "Heal - SirMullich - 50 ",
  "Recharge - Adela - 100 ",
  "CastSpell - Tyris - 1000 - Fireball ",
  "TakeDamage - Tyris - 99 - Fireball ",
  "TakeDamage - Ivor - 3 - Mosquito ",
  "End",
]);

//^(.*)$ за хващане на всичко, '$1', за слагане на кавички
