function vacation (input) {

let budget = Number (input [0]);
let season = input [1]
let typeOfPlace = "";
let location = "";
let price = 0;

    if (budget <= 1000) {
    typeOfPlace = "Camp"
        switch (season) {
            case "Summer":
            location = "Alaska"
            price = budget * 0.65
            break;
            case "Winter":
            location = "Morocco"
            price = budget * 0.45
            break;
        }
    } else if (budget > 1000 && budget <= 3000) {
    typeOfPlace = "Hut"
        switch (season) {
            case "Summer":
            location = "Alaska"
            price = budget * 0.80
            break;
            case "Winter":
            location = "Morocco"
            price = budget * 0.60
            break;
        }       
    } else {
        typeOfPlace = "Hotel"
        switch (season) {
            case "Summer":
            location = "Alaska"
            price = budget * 0.9
            break;
            case "Winter":
            location = "Morocco"
            price = budget * 0.9
            break;
        }       
    }
    
    console.log (`${location} - ${typeOfPlace} - ${price.toFixed (2)}`)

}

vacation (["5000","Winter"])