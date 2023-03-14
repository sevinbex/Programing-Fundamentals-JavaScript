function toyshop (input) {

    let holidayPrice = Number (input [0])
    let puzzleCount = Number (input [1])
    let dollCount = Number (input [2])
    let bearCount = Number (input [3])
    let minionCount = Number (input [4])
    let truckCount = Number (input [5])

   // let puzzlePrice = puzzleCount * 2.60           //broiki po cenite
    //let dollPrice = dollCount * 3
   // let bearPrice = bearCount * 4.1
    //let minionPrice = minionCount * 8.2
    //let truckPrice = truckCount * 2

    let totalCount = puzzleCount + dollCount + bearCount + minionCount + truckCount // broikata
    
    let totalPrice = puzzleCount * 2.6 + dollCount * 3 + bearCount * 4.1 + minionCount * 8.2 + truckCount * 2
    

    if (totalCount >=50) {
        totalPrice = totalPrice * 0.75 // discout ako e nad 50 broiki
    }
    let pricePlusRent = totalPrice * 0.90 //rent 

    if (pricePlusRent >= holidayPrice) {
        let moneyLeft = pricePlusRent - holidayPrice
        console.log (`Yes! ${moneyLeft.toFixed (2)} lv left.`)
    } else if (pricePlusRent <= holidayPrice) {
        let moneyNeeded = holidayPrice - pricePlusRent
        console.log (`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }

}

toyshop (["40.8","20","25","30","50","10"])