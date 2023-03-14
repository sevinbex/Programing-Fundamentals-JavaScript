function tradeCommisions (input) {
    let town = input [0];
    let amount = Number (input[1]);
    let commision = 0
    switch (town) {
        case "Sofia":
            if (amount <= 500 && amount > 0) {
                commision = 5 * amount / 100 ;
                console.log (commision.toFixed (2));
            } else if (amount > 500 && amount <= 1000) {
                commision = 7 * amount / 100 ;
                console.log (commision.toFixed(2));
            } else if (amount > 1000 && amount <= 10000) {
                commision = 8 * amount / 100 ;
                console.log (commision.toFixed(2))
            } else if (amount > 10000) {
                commision = 12 * amount / 100 ;
                console.log (commision.toFixed(2))
            } else if (amount < 0) {        
                console.log ("error")
            } break;
        case "Varna":
            if (amount <= 500 && amount > 0) {
                commision = 4.5 * amount / 100 ;
                console.log (commision.toFixed (2));
            } else if (amount > 500 && amount <= 1000) {
                commision = 7.5 * amount / 100 ;
                console.log (commision.toFixed(2));
            } else if (amount > 1000 && amount <= 10000) {
                commision = 10 * amount / 100 ;
                console.log (commision.toFixed(2))
            } else if (amount > 10000) {
                commision = 13 * amount / 100 ;
                console.log (commision.toFixed(2))
            } else if (amount < 0) {        
                console.log ("error")
            } break;
        case "Plovdiv":
            if (amount <= 500 && amount > 0) {
                commision = 5.5 * amount / 100 ;
                console.log (commision.toFixed (2));
            } else if (amount > 500 && amount <= 1000) {
                commision = 8 * amount / 100 ;
                console.log (commision.toFixed(2));
            } else if (amount > 1000 && amount <= 10000) {
                commision = 12 * amount / 100 ;
                console.log (commision.toFixed(2))
            } else if (amount > 10000) {
                commision = 14.5 * amount / 100 ;
                console.log (commision.toFixed(2))
            } else if (amount < 0) {        
                console.log ("error")
            } break;
        default:
            console.log ("error")
            break;
    }

}

tradeCommisions (["Plovdiv", "499.99"])