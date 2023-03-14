function pool (input) {

    let peopleCount = Number (input [0])
    let taxPerPerson = Number (input [1])
    let shezlongPrice = Number (input [2])
    let umbrellaPrice = Number (input [3])

    let totalTaxPerPerson = peopleCount * taxPerPerson
   
    
    let totalShezlongcount = Math.ceil(peopleCount * 0.75)  
    let totalShezlongTax = totalShezlongcount * shezlongPrice
   

    let totalUmbrellaCount = Math.ceil(peopleCount  / 2) 
    let totalUmbrellatax = totalUmbrellaCount * umbrellaPrice

    let totalBillToPay = totalUmbrellatax + totalShezlongTax + totalTaxPerPerson


        console.log (totalBillToPay.toFixed (2) + " lv.")
}

pool (["100","8","6","4"])

// Math.ceil(peopleCount * 0.75)  !!!!