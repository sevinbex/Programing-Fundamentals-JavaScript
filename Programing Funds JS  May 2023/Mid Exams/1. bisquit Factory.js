function bisquitsFactory(input) {
  let bisquitsSum = 0;
  let bisquitsPerDayPerWorker = Number(input[0]);
  let workers = Number(input[1]);
  let competeFactoryCapacityPer30Days = Number(input[2]);

  for (let day = 1; day <= 30; day++) {
    let bisquitsPerDay = parseInt(bisquitsPerDayPerWorker * workers);
    if (day % 3 === 0) {
      bisquitsPerDay = parseInt(bisquitsPerDay * 0.75);
    }
    bisquitsSum += bisquitsPerDay;
  }

  console.log(`You have produced ${bisquitsSum} biscuits for the past month.`);

  let diff = Math.abs(competeFactoryCapacityPer30Days - bisquitsSum);
  let percentage = ((diff / competeFactoryCapacityPer30Days) * 100).toFixed(2);

  if (competeFactoryCapacityPer30Days > bisquitsSum) {
    console.log(`You produce ${percentage} percent less biscuits.`);
  } else {
    console.log(`You produce ${percentage} percent more biscuits.`);
  }
}

bisquitsFactory(["78", "8", "16000"]);
