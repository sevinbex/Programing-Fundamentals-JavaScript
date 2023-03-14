function fshop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let sum = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana":
                    sum = quantity * 2.5;
                    console.log(sum.toFixed(2));
                    break;
                case "apple":
                    sum = quantity * 1.2;
                    console.log(sum.toFixed(2));
                    break;
                case "orange":
                    sum = quantity * 0.85;
                    console.log(sum.toFixed(2));
                    break;
                case "grapefruit":
                    sum = quantity * 1.45;
                    console.log(sum.toFixed(2));
                    break;
                case "kiwi":
                    sum = quantity * 2.7;
                    console.log(sum.toFixed(2));
                    break;
                case "pineapple":
                    sum = quantity * 5.5;
                    console.log(sum.toFixed(2));
                    break;
                case "grapes":
                    sum = quantity * 3.85;
                    console.log(sum.toFixed(2));
                    break;
                default:
                    console.log("error");
                    break;
            } break;
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana":
                    sum = quantity * 2.7;
                    console.log(sum.toFixed(2));
                    break;
                case "apple":
                    sum = quantity * 1.25;
                    console.log(sum.toFixed(2));
                    break;
                case "orange":
                    sum = quantity * 0.9;
                    console.log(sum.toFixed(2));
                    break;
                case "grapefruit":
                    sum = quantity * 1.6;
                    console.log(sum.toFixed(2));
                    break;
                case "kiwi":
                    sum = quantity * 3;
                    console.log(sum.toFixed(2));
                    break;
                case "pineapple":
                    sum = quantity * 5.6;
                    console.log(sum.toFixed(2));
                    break;
                case "grapes":
                    sum = quantity * 4.2;
                    console.log(sum.toFixed(2));
                    break;
                default:
                    console.log("error");
            } break;
        default:
            console.log("error")
            break;
    }

}

fshop(["apple", "Tuesday", "2"])


//плод banana apple orange grapefruit kiwi pineapple grapes

//цена 2.70   1.25   0.90      1.60   3.00   5.60    4.20