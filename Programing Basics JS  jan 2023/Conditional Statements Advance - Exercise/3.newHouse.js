function newHouse (input) {
let flowerType = input [0];
let flowerCount = Number (input [1]);
let budget = Number (input [2])

let sum = 0;
let moneyLeft = 0;
let neededMoney = 0;

    switch (flowerType) {
        case "Roses":
        sum = flowerCount * 5
        if (flowerCount > 80) {
            sum *=0.9
        } if (sum <= budget) {
            moneyLeft = budget - sum   
            console.log (`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed (2)} leva left.`)       
        } else {
            neededMoney = sum - budget
            console.log (`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
        }break;
        case "Dahlias":
            sum = flowerCount * 3.8
            if (flowerCount > 90) {
                sum *=0.85
            } if (sum <= budget) {
                moneyLeft = budget - sum   
                console.log (`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed (2)} leva left.`)       
            } else {
                neededMoney = sum - budget
                console.log (`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
            }break;
        case "Tulips":
            sum = flowerCount * 2.8
            if (flowerCount > 80) {
                sum *=0.85
            } if (sum <= budget) {
                moneyLeft = budget - sum   
                console.log (`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed (2)} leva left.`)       
            } else {
                neededMoney = sum - budget
                console.log (`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
            }break;                
        case "Narcissus":
            sum = flowerCount * 3
            if (flowerCount < 120) {
                sum *=1.15
            } if (sum <= budget) {
                moneyLeft = budget - sum   
                console.log (`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed (2)} leva left.`)       
            } else {
                neededMoney = sum - budget
                console.log (`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
            }break;          
        case "Gladiolus":
            sum = flowerCount * 2.5
            if (flowerCount < 80) {
                sum *=1.20
            } if (sum <= budget) {
                moneyLeft = budget - sum   
                console.log (`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed (2)} leva left.`)       
            } else {
                neededMoney = sum - budget
                console.log (`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
            }break;
        
        
    }

}

newHouse (["Narcissus", "119", "360"])