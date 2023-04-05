function bonusScores(input) {
  let studentsCount = Number(input.shift());
  let lecturesCount = Number(input.shift());
  let bonusPoints = Number(input.shift());
  let highestBonus = 0;
  let highestLectures = 0;

  for (let i = 0; i < input.length; i++) {
    let studentsLectures = Number(input[i]);
    let bonus = (studentsLectures / lecturesCount) * (5 + bonusPoints);
    parseInt(bonus);
    if (bonus > highestBonus) {
      highestBonus = bonus;
    }
    if (studentsLectures > highestLectures) {
      highestLectures = studentsLectures;
    }
  }

  console.log(`Max Bonus: ${Math.ceil(highestBonus)}.`);

  console.log(`The student has attended ${highestLectures} lectures.`);
}

// bonusScores(["5", "25", "30", "12", "19", "24", "16", "20"]);
bonusScores([
  "10",
  "30",
  "14",
  "28",
  "23",
  "27",
  "8",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
