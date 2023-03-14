function repainting(input) {
  let index = 0;
  let height = Number(input[index]);
  index++;
  let width = Number(input[index]);
  index++;
  let percentNoPaint = Number(input[index]);
  index++;
  let totalSquare = height * width * 4;
  let totalNotToPaint = (totalSquare * percentNoPaint) / 100;
  let totalToPaint = Math.ceil(totalSquare - totalNotToPaint);
  let totalPainted = 0;
  let command = input[index];
  index++;

  while (command !== "Tired!") {
    let paintQuantity = Number(command);
    totalPainted += paintQuantity;

    if (totalPainted > totalToPaint) {
      let paintLeft = totalPainted - totalToPaint;
      console.log(
        `All walls are painted and you have ${paintLeft} l paint left!`
      );
      return;
    }
    if (totalPainted === totalToPaint) {
      console.log(`All walls are painted! Great job, Pesho!`);
      return;
    }

    command = input[index];
    index++;
  }
  if (command === "Tired!") {
    let totalToPaintLeft = totalToPaint - totalPainted;
    console.log(`${totalToPaintLeft} quadratic m left.`);
  }
}
// repainting(["3", "5", "10", "2", "3", "4", "Tired!"]);
repainting(["2", "3", "25", "6", "7", "5"]);
