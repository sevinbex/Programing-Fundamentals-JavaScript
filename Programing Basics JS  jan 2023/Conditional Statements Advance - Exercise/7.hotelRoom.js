function hr(input) {

    let month = input[0];
    let nightsCount = Number(input[1]);
    let sum = 0
    let apartmentPrice = 0
    let studioPrice = 0

    switch (month) {
        case "May":
        case "October":
            studioPrice = nightsCount * 50
            apartmentPrice = nightsCount * 65
            if (nightsCount > 7 && nightsCount < 15) {
                studioPrice *= 0.95
            } else if (nightsCount > 14) {
                studioPrice *= 0.7
                apartmentPrice *= 0.9
            }
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            break;
        case "June":
        case "September":
            studioPrice = nightsCount * 75.2
            apartmentPrice = nightsCount * 68.7
            if (nightsCount > 14) {
                studioPrice *= 0.8
                apartmentPrice *= 0.9
            }
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            break;
        case "July":
        case "August":
            studioPrice = nightsCount * 76
            apartmentPrice = nightsCount * 77
            if (nightsCount > 14) {
                apartmentPrice *= 0.9
            }console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
    }

}

hr(["June",

"14"])