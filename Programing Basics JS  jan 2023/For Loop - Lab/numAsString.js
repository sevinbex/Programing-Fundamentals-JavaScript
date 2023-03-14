function solve(input) {
  let num = input[0];
  let numAsString = num + ""; // превръщане на Number в String за да можем да ги извлечем
  let sum = 0; // извлечем индивидуално по индекс като от текст за for цикъла

  for (let i = 0; i < numAsString.length; i++) {
    // дължината на inputа като условие
    sum = sum + Number(numAsString[i]); // превръщане на String в Number, за да можем да
  } // извършваме математически операции

  console.log(sum);
}

solve([23456]);
