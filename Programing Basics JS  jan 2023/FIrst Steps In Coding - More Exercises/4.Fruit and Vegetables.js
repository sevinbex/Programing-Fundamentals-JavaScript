function fv (input) {

let vegetablePrice = Number (input [0])
let fruitPrice = Number (input [1])

let vegetableKilograms = Number (input [2])
let fruitKilograms = Number (input [3])

let totalVegPrice = vegetableKilograms * vegetablePrice
let totalFruitPrice = fruitKilograms * fruitPrice

let totalBill = totalFruitPrice + totalVegPrice
let totalBillInEuro = totalBill / 1.94

    console.log (totalBillInEuro.toFixed (2))

}

fv (["1.5","2.5","10","10"])