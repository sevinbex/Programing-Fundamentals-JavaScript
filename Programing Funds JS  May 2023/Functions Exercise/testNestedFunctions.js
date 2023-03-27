function priceOfProduct(grade, array) {
  let hasPass = false;
  if (gradePass) {
    header();
    printName(array);
    formatGrade(grade);
  }

  function header() {
    console.log(`~~~-  {@}  -~~~`);
    console.log(`~-Certificate-~`);
    console.log(`~~~- ~---~ -~~~`);
  }

  function printName(array) {
    console.log(`${array[0]} ${array[1]}`);
  }

  function gradePass(grade) {
    if (grade > 2.99) {
      hasPass = true;
    }
  }

  function formatGrade(grade) {
    console.log(`Very good ${grade}`);
  }
}
priceOfProduct(5.5, ["Peter", "Parker"]);
