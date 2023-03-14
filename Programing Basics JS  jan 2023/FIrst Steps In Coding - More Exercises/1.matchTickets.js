function mt (input) {

let budget = Number (input [0]);
let ticketType = input [1];
let peopleCount = Number (input [2]);

let totalTicketsPrice = 0
let transportPrice = 0

    switch (ticketType) {
        case "Normal":
        totalTicketsPrice = peopleCount * 249.99
        if (peopleCount < 5 && peopleCount > 0) {
            transportPrice = budget * 0.75
        } else if (peopleCount < 10) {
            transportPrice = budget * 0.6
        } else if (peopleCount < 25) {
            transportPrice = budget * 0.5
        } else if (peopleCount < 50) {
            transportPrice = budget * 0.4
        } else if (peopleCount > 49) {
            transportPrice = budget * 0.25
        }
        break;
        case "VIP":
        totalTicketsPrice = peopleCount * 499.99
        if (peopleCount < 5 && peopleCount > 0) {
            transportPrice = budget * 0.75
        } else if (peopleCount < 10) {
            transportPrice = budget * 0.6
        } else if (peopleCount < 25) {
            transportPrice = budget * 0.5
        } else if (peopleCount < 50) {
            transportPrice = budget * 0.4
        } else if (peopleCount > 49) {
            transportPrice = budget * 0.25
        }
        break;
    }
    if (budget > (totalTicketsPrice + transportPrice)) {
        let moneySpent = totalTicketsPrice + transportPrice
        let moneyLeft  = budget - moneySpent
        console.log (`Yes! You have ${moneyLeft.toFixed (2)} leva left.`)
    } else {
        let moneyNeed = ((totalTicketsPrice + transportPrice)- budget)
        console.log (`Not enough money! You need ${moneyNeed.toFixed (2)} leva.`)
    }
        


}

mt (["30000","VIP","49"])