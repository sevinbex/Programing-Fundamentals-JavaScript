function steps(input) {
  let index = 0;
  let goal = 10000;
  let command = input[index];
  index++;
  let stepsSum = 0;

  while (command !== "Going home") {
    eachTimeSteps = Number(command);
    stepsSum += eachTimeSteps;

    command = input[index];
    index++;
    if (stepsSum >= goal) {
      let stepsMore = stepsSum - goal;
      console.log(`Goal reached! Good job!`);
      console.log(`${stepsMore} steps over the goal!`);
      return;
    }
    // if (command === "Going home") {
    //   let stepsToHome = Number(input[index]);
    //   if (stepsToHome + stepsSum >= goal) {
    //     let stepsMore = stepsToHome + stepsSum - goal;
    //     console.log(`Goal reached! Good job!`);
    //     console.log(`${stepsMore} steps over the goal!`);
    //   } else {
    //     let stepsNeed = goal - (stepsToHome + stepsSum);
    //     console.log(`${stepsNeed} more steps to reach goal.`);
    //   }
    // }
  }
  if (command === "Going home") {
    let stepsToHome = Number(input[index]);
    if (stepsToHome + stepsSum >= goal) {
      let stepsMore = stepsToHome + stepsSum - goal;
      console.log(`Goal reached! Good job!`);
      console.log(`${stepsMore} steps over the goal!`);
    } else {
      let stepsNeed = goal - (stepsToHome + stepsSum);
      console.log(`${stepsNeed} more steps to reach goal.`);
    }
  }
}

steps(["1000", "1500", "2000", "6500"]);
steps(["1500", "300", "2500", "3000", "Going home", "200"]);
steps(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
steps(["125", "250", "4000", "30", "2678", "4682"]);
