function greening(input) {
    let area = Number(input[0]);
    let discount = area * 7.61 * 0.18
    let lastprice = area * 7.61 - discount
    console.log("The final price is: " + lastprice + " lv.")
    console.log("The discount is: " + discount + " lv.")
}

greening([150])