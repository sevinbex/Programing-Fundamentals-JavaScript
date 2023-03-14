function ss (input) {
    let product = input [0];
    let town = input [1];
    let quantity = Number (input [2]);

    let sum = 0;

    switch (town) {
        case "Sofia":
            switch (product) {
                case "coffee":
                sum = quantity * 0.5;
                    console.log (sum);
                break;
                case "water":
                sum = quantity * 0.8;
                    console.log (sum);
                        break;
                case "beer":
                sum = quantity * 1.2;
                    console.log (sum);
                        break;
                case "sweets":
                sum = quantity * 1.45;
                    console.log (sum);
                        break;
                case "peanuts":
                sum = quantity * 1.6
                    console.log (sum);
                        break;
            } break;
        case "Plovdiv":
            switch (product) {
                case "coffee":
                sum = quantity * 0.4;
                    console.log (sum);
                        break;
                case "water":
                sum = quantity * 0.7;
                    console.log (sum);
                        break;
                case "beer" :
                sum = quantity * 1.15;
                    console.log (sum);
                        break;
                case "sweets":
                sum = quantity * 1.30;
                    console.log (sum);
                        break;
                case "peanuts":
                sum = quantity * 1.50;
                    console.log (sum);
                        break;
            } break;
        case "Varna":
            switch (product) {
                case "coffee":
                sum = quantity * 0.45;
                console.log (sum);
                    break;
                case "water":
                sum = quantity * 0.7;   
                console.log (sum);
                    break;
                case "beer":
                sum = quantity * 1.1;
                console.log (sum);
                    break;    
                case "sweets":
                sum = quantity * 1.35;
                console.log (sum);
                    break;
                case "peanuts":
                sum = quantity * 1.55;
                console.log (sum);
                    break;                 
            } break;

    }
}

ss (["coffee","Varna","2"])