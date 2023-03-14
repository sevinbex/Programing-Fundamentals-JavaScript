function owic(input) {
  let movieTitle = input[0];
  let hallType = input[1];
  let ticketCount = Number(input[2]);
  let sum = 0;

  switch (movieTitle) {
    case "A Star Is Born":
      switch (hallType) {
        case "normal":
          sum = ticketCount * 7.5;
          break;
        case "luxury":
          sum = ticketCount * 10.5;
          break;
        case "ultra luxury":
          sum = ticketCount * 13.5;
          break;
      }
      break;
    case "Bohemian Rhapsody":
      switch (hallType) {
        case "normal":
          sum = ticketCount * 7.35;
          break;
        case "luxury":
          sum = ticketCount * 9.45;
          break;
        case "ultra luxury":
          sum = ticketCount * 12.75;
          break;
      }
      break;
    case "Green Book":
      switch (hallType) {
        case "normal":
          sum = ticketCount * 8.15;
          break;
        case "luxury":
          sum = ticketCount * 10.25;
          break;
        case "ultra luxury":
          sum = ticketCount * 13.25;
          break;
      }
      break;
    case "The Favourite":
      switch (hallType) {
        case "normal":
          sum = ticketCount * 8.75;
          break;
        case "luxury":
          sum = ticketCount * 11.55;
          break;
        case "ultra luxury":
          sum = ticketCount * 13.95;
          break;
      }
      break;
  }
  console.log(`${movieTitle} -> ${sum.toFixed(2)} lv.`);
}

owic(["Green Book", "normal", "63"]);
