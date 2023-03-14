function ttt(input) {
  let index = 0;
  let juryCount = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let totalGradeCounter = 0;
  let gradeCounts = 0;
  while (command !== "Finish") {
    let gradeCounter = 0;
    let presentationName = command;
    // totalGradeCounter
    for (let i = 0; i < juryCount; i++) {
      let grade = Number(input[index]);
      gradeCounter += grade;
      gradeCounts++;
      totalGradeCounter += grade;
      index++;
    }
    let averageGrade = gradeCounter / juryCount;
    console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);
    command = input[index];
    index++;
  }
  if (command === "Finish") {
    let averageTotalGradeCounter = totalGradeCounter / gradeCounts;
    console.log(
      `Student's final assessment is ${averageTotalGradeCounter.toFixed(2)}.`
    );
  }
}

// ttt(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
// ttt([
//   "3",

//   "Arrays",

//   "4.53",

//   "5.23",

//   "5.00",

//   "Lists",

//   "5.83",

//   "6.00",

//   "5.42",

//   "Finish",
// ]);
ttt([
  "2",
  "Objects and Classes",
  "5.77",
  "4.23",
  "Dictionaries",
  "4.62",
  "5.02",
  "RegEx",
  "2.88",
  "3.42",
  "Finish",
]);
