function cinema (input) {
    let type = input [0];
    let lenght = Number (input [1]);
    let width = Number (input [2]);

    let totalPlaces = lenght * width;
    let sum = 0;
    switch (type) {
        case "Premiere":
        sum = totalPlaces * 12;
        console.log (`${sum.toFixed(2)} leva`);
        break;
        case "Normal":
        sum = totalPlaces * 7.5;
        console.log (`${sum.toFixed(2)} leva`);
        break;
        case "Discount":
        sum = totalPlaces * 5;
        console.log (`${sum.toFixed(2)} leva`);
        break;
    }   
    

}

cinema (["Discount", "12", "30"])