function skiTrip (input) {
let days = Number (input[0]);
let type = input [1];
let feedback = input [2];

let nights = days - 1;
let sum = 0;

    switch (type) {
        case "room for one person":
        sum = nights * 18
        break;
        case "apartment":
        sum = nights * 25
        if (nights < 10){
        sum *= 0.70
        }else if (nights > 10 && nights <= 15) {
            sum *= 0.65
        }else {
            sum *= 0.5
        } break;
        case "president apartment":
        sum = nights * 35
        if (nights < 10){
        sum *= 0.90
        }else if (nights > 10 && nights <= 15) {
            sum *= 0.85
        }else {
            sum *= 0.80
         }break;
    
    }if (feedback == "positive") {
        sum *= 1.25
    } else {
        sum *= 0.9
    }

        console.log (sum.toFixed (2))

}

skiTrip (["12", "room for one person", "positive"])