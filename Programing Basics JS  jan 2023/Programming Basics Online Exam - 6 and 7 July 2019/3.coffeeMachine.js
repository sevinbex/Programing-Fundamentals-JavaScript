function coffeeMachine (input) {

let type = input [0];
let sugarOption = input [1];
let count = Number (input [2]);
let pricePerUnit = 0;
let totalPrice = 0;

    switch (type) {
        case "Espresso":
        switch (sugarOption ) {
            case "Without":
            pricePerUnit = 0.9
            totalPrice = count * pricePerUnit
            break;
            case "Normal":
            pricePerUnit = 1
            totalPrice = count * pricePerUnit
            break;
            case "Extra":
            pricePerUnit = 1.2
            totalPrice = count * pricePerUnit
            break;
        } break;
        case "Cappuccino":
            switch (sugarOption ) {
                case "Without":
                pricePerUnit = 1
                totalPrice = count * pricePerUnit
                break;
                case "Normal":
                pricePerUnit = 1.2
                totalPrice = count * pricePerUnit
                break;
                case "Extra":
                pricePerUnit = 1.6
                totalPrice = count * pricePerUnit
                break;
            }break;
        case "Tea":
            switch (sugarOption ) {
                case "Without":
                pricePerUnit = 0.5
                totalPrice = count * pricePerUnit
                break;
                case "Normal":
                pricePerUnit = 0.6
                totalPrice = count * pricePerUnit
                break;
                case "Extra":
                pricePerUnit = 0.7
                totalPrice = count * pricePerUnit
                break;
            }break;    
    }

    if (sugarOption == "Without") {
        totalPrice *= 0.65
    } if (type == "Espresso" && count >= 5) {
        totalPrice *=0.75
    } if (totalPrice > 15) {
        totalPrice *= 0.80
    }



console.log (`You bought ${count} cups of ${type} for ${totalPrice.toFixed (2)} lv.`)
}

coffeeMachine (["Espresso",
"Without",
"10"])





