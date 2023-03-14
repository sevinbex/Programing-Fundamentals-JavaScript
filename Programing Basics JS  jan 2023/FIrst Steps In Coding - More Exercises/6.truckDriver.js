function truckDriver (input) {
let season = input [0];
let kmPerMonth = Number (input [1]);

let monthSalary = 0

    switch (season) {
        case "Spring":
        case "Autumn":
        if (kmPerMonth <= 5000){
        monthSalary = kmPerMonth * 0.75
        } else if (kmPerMonth <= 10000) {
            monthSalary = kmPerMonth * 0.95
        } else {
            monthSalary = kmPerMonth * 1.45
        }
        break;
        case "Summer":
        if (kmPerMonth <= 5000){
        monthSalary = kmPerMonth * 0.90
        } else if (kmPerMonth <= 10000) {
        monthSalary = kmPerMonth * 1.1
        } else {
        monthSalary = kmPerMonth * 1.45
        }
        break;
        case "Winter":
        if (kmPerMonth <= 5000){
        monthSalary = kmPerMonth * 1.05
        } else if (kmPerMonth <= 10000) {
        monthSalary = kmPerMonth * 1.25
        } else {
        monthSalary = kmPerMonth * 1.45
        }
        break;
    }

    let seasonSalary = monthSalary * 4 
    let salaryAfterTaxes = seasonSalary * 0.90

    console.log (salaryAfterTaxes.toFixed (2))

}

truckDriver (["Spring","16942"])