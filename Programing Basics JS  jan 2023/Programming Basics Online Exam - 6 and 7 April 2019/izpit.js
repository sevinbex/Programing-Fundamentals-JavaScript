function calories(input) {
  let fatPercentage = Number(input[0]);
  let proteinPercentage = Number(input[1]);
  let carbsPercentage = Number(input[2]);
  let totalCalories = Number(input[3]);
  let waterInMama = Number(input[4]);

  let gramFats = 9;
  let gramProteins = 4;
  let gramCarbs = 4;

  let totalFatInMama = (fatPercentage * totalCalories) / 100 / gramFats;
  let totalProteinInMama =
    (proteinPercentage * totalCalories) / 100 / gramProteins;
  let totalCarbsInMama = (carbsPercentage * totalCalories) / 100 / gramCarbs;
  //   console.log(totalFatInMama);
  //   console.log(totalProteinInMama);
  //   console.log(totalCarbsInMama);
  let totalGoodsInMama = totalFatInMama + totalProteinInMama + totalCarbsInMama;
  let caloriesPerGram = totalCalories / totalGoodsInMama;
  //   console.log(caloriesPerGram);
  let pureCaloriesCount = 100 - waterInMama;
  let pureCaloriesPercentage = (pureCaloriesCount * caloriesPerGram) / 100;
  console.log(pureCaloriesPercentage.toFixed(4));
}

// calories(["60", "25", "15", "2500", "60"]);
calories(["40", "40", "20", "3000", "40"]);
calorie;
