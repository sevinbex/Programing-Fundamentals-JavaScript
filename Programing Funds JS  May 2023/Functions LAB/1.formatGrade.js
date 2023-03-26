function checkGrade(grade) {
  let finalGrade = 0;
  let gradeWord = "";
  if (grade < 3) {
    finalGrade = 2;
    gradeWord = "Fail";
  } else if (grade < 3.5) {
    finalGrade = grade;
    gradeWord = "Poor";
  } else if (grade < 4.5) {
    finalGrade = grade;
    gradeWord = "Good";
  } else if (grade < 5.5) {
    finalGrade = grade;
    gradeWord = "Very good";
  } else if (grade > 5.49) {
    finalGrade = grade;
    gradeWord = "Excellent";
  }

  if (gradeWord == "Fail") {
    console.log(`${gradeWord} (${finalGrade})`);
  } else {
    console.log(`${gradeWord} (${finalGrade.toFixed(2)})`);
  }
}
checkGrade(3.33);
checkGrade(2.99);
checkGrade(4.5);
