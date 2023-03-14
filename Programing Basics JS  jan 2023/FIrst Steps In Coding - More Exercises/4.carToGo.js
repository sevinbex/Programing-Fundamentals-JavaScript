function carToGo (input) {

let budget = Number (input [0]);
let season = input [1];

let comfortClass = ""
let carType = ""
let carPrice = 0;


if (budget <= 100) {
    comfortClass = "Economy class";
    switch (season) {
        case "Summer":
        carType = "Cabrio"
        carPrice = 0.35 * budget
        break;
        case "Winter":
        carType = "Jeep"
        carPrice = 0.65 * budget
        break;
    }
} else if (budget > 100 && budget <=500 ) {
    comfortClass = "Compact class"
    switch (season) {
        case "Summer":
        carType = "Cabrio"
        carPrice = 0.45 * budget
        break;
        case "Winter":
        carType = "Jeep"
        carPrice = 0.80 * budget
        break;
    }
} else if (budget > 500) {
    comfortClass = "Luxury class"
    switch (season) {
        case "Summer":
        carType = "Jeep"
        carPrice = 0.90 * budget
        break;
        case "Winter":
        carType = "Jeep"
        carPrice = 0.90 * budget
        break;
    }
}
console.log (`${comfortClass}`)
console.log (`${carType} - ${carPrice.toFixed (2)}`)


}

carToGo (["1010","Summer"])