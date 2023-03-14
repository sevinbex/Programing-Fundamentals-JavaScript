function sfc (input) {
    let pencilCount = Number (input[0]);
    let markerCount = Number (input [1]);
    let deskCleaner = Number (input[2]);
    let discount = Number (input[3]) / 100
    let pencilPrice = pencilCount * 5.8;
    let markerPrice = markerCount * 7.2;
    let deskCleanerPrice = deskCleaner * 1.2;

    let totalPrice = pencilPrice + markerPrice + deskCleanerPrice;
    let discountedPrice = totalPrice - (totalPrice * discount);
        console.log (discountedPrice)


}

sfc (["4","2","5","13"])