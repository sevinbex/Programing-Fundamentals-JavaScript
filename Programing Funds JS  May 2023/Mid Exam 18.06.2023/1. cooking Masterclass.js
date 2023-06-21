function cookingMasterclass(input) {
  let budget = Number(input[0]);
  let students = Number(input[1]);
  let flourPrice = Number(input[2]);
  let eggPrice = Number(input[3]);
  let apronPrice = Number(input[4]);

  let result =
    (students + Math.ceil(students * 0.2)) * apronPrice +
    (students - Math.floor(students / 5)) * flourPrice +
    students * 10 * eggPrice;

  if (result > budget) {
    console.log(`${Math.abs(budget - result).toFixed(2)}$ more needed.`);
  } else {
    console.log(`Items purchased for ${result.toFixed(2)}$.`);
  }
}

cookingMasterclass([50, 2, 1.0, 0.1, 10.0]);
