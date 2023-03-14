function wf2(input) {

let holidays = Number (input [0]);
let workingDays = 365 - holidays
let hours = 0
let minutes = 0
let holidaysPlayTime = holidays * 127
let workingDaysPlayTime = workingDays * 63

let totalMinutesPerYear = holidaysPlayTime + workingDaysPlayTime

if (totalMinutesPerYear < 30000){
    let minutesMiss = 30000 - totalMinutesPerYear
    minutes = minutesMiss % 60
    hours = Math.floor(minutesMiss / 60)
    console.log (`Tom sleeps well`)
    console.log (`${hours} hours and ${minutes} minutes less for play`)
} else {
    let minutesNeed = totalMinutesPerYear - 30000
    minutes = minutesNeed % 60
    hours = Math.floor(minutesNeed / 60)
    console.log (`Tom will run away`)
    console.log (`${hours} hours and ${minutes} minutes more for play`)
}

}

wf2 (["113"])