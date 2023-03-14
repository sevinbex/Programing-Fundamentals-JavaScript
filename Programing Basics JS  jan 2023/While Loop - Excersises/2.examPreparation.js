function examPreparation(input) {
  let index = 0;
  let maxBadGradesCount = Number(input[index]);
  index++;
  let problemName = input[index];
  index++;
  let problemGrade = Number(input[index]);
  index++;
  let BadGradesCount = 0;
  let avgScoreSum = 0;
  let lastProblemName = "";
  let problemsCounter = 0;
  while (problemName !== "Enough") {
    lastProblemName = problemName;
    if (problemGrade <= 4) {
      BadGradesCount++;
    }
    if (BadGradesCount === maxBadGradesCount) {
      console.log(`You need a break, ${BadGradesCount} poor grades.`);
      return;
    }

    avgScoreSum += problemGrade;
    problemsCounter++;
    problemName = input[index];
    index++;
    problemGrade = Number(input[index]);
    index++;
  }
  let avgScore = avgScoreSum / problemsCounter;
  console.log(`Average score: ${avgScore.toFixed(2)}`);
  console.log(`Number of problems: ${problemsCounter}`);
  console.log(`Last problem: ${lastProblemName}`);
}

examPreparation([
  "3",

  "Money",

  "6",

  "Story",

  "4",

  "SpringTime",

  "5",

  "Bus",

  "6",

  "Enough",
]);

// examPreparation(["2", "Income", "3", "GameInfo", "6", "BestPlayer", "4"]);
