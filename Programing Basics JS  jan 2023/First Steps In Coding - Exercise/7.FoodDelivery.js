function fd (input) {
    let chickenMenuCount = Number (input[0]);
    let fishMenuCount = Number (input[1]);
    let veganMenuCount = Number (input [2]);

    let chickenMenuPrice = 10.35
    let fishMenuPrice = 12.4
    let veganMenuPrice = 8.15

    let chickenMenuTotal = chickenMenuCount * chickenMenuPrice
    let fishMenuTotal = fishMenuCount * fishMenuPrice
    let veganMenuTotal = veganMenuCount * veganMenuPrice

    let totalDinnerPrice = chickenMenuTotal + fishMenuTotal + veganMenuTotal
    let desertMenuPrice = totalDinnerPrice * 0.2
    let deliveryPrice = 2.5

    let totalBill = totalDinnerPrice + desertMenuPrice + deliveryPrice

    console.log (totalBill)

}

fd (["9","2","6"])