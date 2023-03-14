function basketballEquipment(input) {

    let annualTrainingFee = Number (input[0])
    let sneakersPrice = annualTrainingFee * 0.6
    let equipment = sneakersPrice * 0.8
    let ball = equipment * 0.25
    let accesories = ball * 0.2

       console.log(annualTrainingFee + sneakersPrice + equipment + ball + accesories)

}

basketballEquipment (["365"])