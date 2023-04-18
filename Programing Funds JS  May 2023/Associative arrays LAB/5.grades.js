function gradess(list) {
  let studList = {};

  for (const line of list) {
    let [name, ...grades] = line.split(" ");
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += Number(grades[i]);
    }
    let average = sum / grades.length;
    // console.log(average.toFixed(2));
  }
}

gradess(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
