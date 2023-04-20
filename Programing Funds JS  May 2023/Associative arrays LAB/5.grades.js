function gradess(list) {
  let studList = {};

  for (const line of list) {
    let studentsListArr = line.split(" ");
    let name = studentsListArr.shift();
    let grades = studentsListArr.map((x) => Number(x));

    if (!studList[name]) {
      studList[name] = [];
    }

    studList[name] = studList[name].concat(grades);
  }

  let studentsEntries = Object.entries(studList);
  let sortedStudents = studentsEntries.sort((a, b) => a[0].localeCompare(b[0]));

  for (const [name, grades] of sortedStudents) {
    let sum = 0;

    for (const grade of grades) {
      sum += grade;
    }

    let average = sum / grades.length;

    console.log(`${name}: ${average.toFixed(2)}`);
  }
}
gradess(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
