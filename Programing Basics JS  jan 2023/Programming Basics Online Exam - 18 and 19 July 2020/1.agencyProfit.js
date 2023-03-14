function ap(input) {
  let companyName = input[0];
  let adultTickets = Number(input[1]);
  let childrenTickets = Number(input[2]);
  let adultTicketPrice = Number(input[3]);
  let serviceTax = Number(input[4]);

  let totalAdultTicketsPrice = adultTickets * adultTicketPrice;
  let totalChildrenTicketsPrice = childrenTickets * (adultTicketPrice * 0.3);
  let totalServiceTax = (adultTickets + childrenTickets) * serviceTax;
  let totalSum =
    totalAdultTicketsPrice + totalChildrenTicketsPrice + totalServiceTax;
  let companyProfit = totalSum * 0.2;

  console.log(
    `The profit of your agency from ${companyName} tickets is ${companyProfit.toFixed(
      2
    )} lv.`
  );
}

// ap(["WizzAir", "15", "5", "120", "40"]);
ap(["Ryanair", "60", "23", "158.96", "39.12"]);
