function fishingBoat (input) {

let budget = Number (input [0]);
let season = input [1];
let fisherCount = Number (input [2]);

let sum = 0;
//let totalSum = 0;
    switch (season) {
        case "Spring":
            sum = 3000;
        break;
        case "Summer":
            sum = 4200;
        break;
        case "Autumn":
            sum = 4200;
        break;
        case "Winter":
            sum = 2600;
        break;
    } if (fisherCount <= 6) {
        sum *= 0.90
    } else if (fisherCount <= 11) {
        sum *= 0.85
    } else if (fisherCount > 12) {
        sum *= 0.75
    } if (fisherCount % 2 == 0 && season !== "Autumn") {
        sum *=0.95
    } if (budget >= sum) {
        let moneyLeft = budget - sum
        console.log (`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let moneyNeed = sum - budget
        console.log (`Not enough money! You need ${moneyNeed.toFixed (2)} leva.`)
    }


}

fishingBoat (["3600","Autumn","6"])