function wsm (input) {

let budget = Number (input [0])
let VGAcount = Number (input [1])
let CPUcount = Number (input [2])
let RAMcount = Number (input [3])

let VGAprice = 250
let CPUprice = VGAprice * VGAcount * 0.35
let RAMprice = VGAprice * VGAcount * 0.10

let totalPrice = VGAcount * VGAprice + CPUcount * CPUprice + RAMcount * RAMprice

if (VGAcount > CPUcount) {
   totalPrice = totalPrice * 0.85
}

if (totalPrice <= budget) {
   let moneyLeft = budget - totalPrice
    console.log (`You have ${moneyLeft.toFixed(2)} leva left!`)
} else if (totalPrice >= budget) {
   let moneyNeed = totalPrice - budget
    console.log (`Not enough money! You need ${moneyNeed.toFixed (2)} leva more!`)
}

}

wsm (["920.45","3","1","1"])