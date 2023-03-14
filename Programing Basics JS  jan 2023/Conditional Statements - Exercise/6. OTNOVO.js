function wsr(input) {

    let wRecordInSeconds = Number (input [0])
    let distanceInMeters = Number (input [1])
    let timeInSecondsFor1MeterSwim = Number (input [2])

    let secondsNeed = distanceInMeters * timeInSecondsFor1MeterSwim
    let delayInSwim = Math.floor(distanceInMeters / 15) * 12.5
    let totalSeconds = delayInSwim + secondsNeed

    if (totalSeconds < wRecordInSeconds) {
        console.log (`Yes, he succeeded! The new world record is ${totalSeconds.toFixed (2)} seconds.`) 
    } else  {
        let secondsNeed = totalSeconds - wRecordInSeconds
        console.log (`No, he failed! He was ${secondsNeed.toFixed (2)} seconds slower.`)
    }



}

wsr(["10464","1500","20"])


