function otfe(input) {
    let examHour = Number(input[0])
    let examMinutes = Number(input[1])
    let arriveHour = Number(input[2])
    let arriveMinutes = Number(input[3])

    let examHourInMinutes = examHour * 60
    let totalExamMinutes = examHourInMinutes + examMinutes

    let arriveHourInMinutes = arriveHour * 60
    let totalArriveMinutes = arriveHourInMinutes + arriveMinutes
    let minutes = 0;
    let hours = 0;

    if (totalArriveMinutes > totalExamMinutes) {
        let minutesLate = totalArriveMinutes - totalExamMinutes
        if (minutesLate < 60) {
            minutes = totalArriveMinutes - totalExamMinutes
            console.log("Late")
            console.log(`${minutes} minutes after the start`)
        } else if (minutesLate >= 60) {
            minutes = minutesLate % 60
            hours = Math.floor(minutesLate / 60)
            if (minutes < 10) {
                console.log("Late")
                console.log(`${hours}:0${minutes} hours after the start`)
            } else {
                console.log("Late")
                console.log(`${hours}:${minutes} hours after the start`)
            }
        }
    }
   else if ((totalExamMinutes - totalArriveMinutes) <= 30) {
        let minutesBefore = totalExamMinutes - totalArriveMinutes
        if ((totalExamMinutes - totalArriveMinutes) == 0) {
            console.log("On time")
        } else {
            console.log("On time")
            console.log(`${minutesBefore} minutes before the start`)
        }
    } 
   else if ((totalExamMinutes - totalArriveMinutes) > 30) {
        let minutesEarly = totalExamMinutes - totalArriveMinutes
        if (minutesEarly < 60) {
            console.log("Early")
            console.log(`${minutesEarly} minutes before the start`)
        } else if (minutesEarly >= 60) {
            minutes = minutesEarly % 60
            hours = Math.floor(minutesEarly / 60)
            if (minutes < 10) {
                console.log("Early")
                console.log(`${hours}:0${minutes} hours before the start`)
            } else {
                console.log("Early")
                console.log(`${hours}:${minutes} hours before the start`)
            }

        }

    }





}

otfe (["9",

"30",

"9",

"50"])