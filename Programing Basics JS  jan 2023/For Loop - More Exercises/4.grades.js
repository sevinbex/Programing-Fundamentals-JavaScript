function grades(input) {
  let studentsCount = Number(input[0]);

  let topStudents = 0;
  let between4and5 = 0;
  let between3and4 = 0;
  let fail = 0;
  let sum = 0;

  for (let i = 1; i <= studentsCount; i++) {
    let currentGrade = Number(input[i]);
    // console.log(currentGrade);
    if (currentGrade > 4.99) {
      topStudents += 1;
      sum += currentGrade;
    } else if (currentGrade > 3.99) {
      between4and5 += 1;
      sum += currentGrade;
    } else if (currentGrade > 2.99) {
      between3and4 += 1;
      sum += currentGrade;
    } else {
      fail += 1;
      sum += currentGrade;
    }
  }
  let averageGrade = sum / studentsCount;
  let topStudentsPercent = (topStudents / studentsCount) * 100;
  let between4and5Percent = (between4and5 / studentsCount) * 100;
  let between3and4Percent = (between3and4 / studentsCount) * 100;
  let failPercent = (fail / studentsCount) * 100;

  console.log(`Top students: ${topStudentsPercent.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${between4and5Percent.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${between3and4Percent.toFixed(2)}%`);
  console.log(`Fail: ${failPercent.toFixed(2)}%`);
  console.log(`Average: ${averageGrade.toFixed(2)}`);
}

grades(["6", "2", "3", "4", "5", "6", "2.2"]);
