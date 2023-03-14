
function repainting (input) {
    let nylonQuantity = Number (input [0]);
    let paintQuantity = Number (input[1]);
    let thinnerQUantity = Number (input[2]);
    let workTime = Number(input[3]);

    let additionalPaintQuantity = paintQuantity * 0.10
    let totalPaintQuantity = paintQuantity + additionalPaintQuantity

    let totalNylonQuantity = nylonQuantity + 2;

    let nylonPrice = totalNylonQuantity * 1.50;
    let paintPrice = totalPaintQuantity * 14.50;
    let thinnerPrice = thinnerQUantity * 5.00;

    let totalMaterialPrice = nylonPrice + paintPrice + thinnerPrice + 0.40;
    let workPricePerHour = totalMaterialPrice * 0.3;
    let totalWorkPrice = workTime * workPricePerHour;

    let totalPrice = totalMaterialPrice + totalWorkPrice;

    console.log (totalPrice)

    
    
}

repainting (["10","11","4","8"])

