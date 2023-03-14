function dc (input) {
    let deposit = Number(input[0])
    let months = Number(input[1])
    let yearly = Number(input[2])
    let yearlyPercent = yearly / 100
    finalSum = deposit + months * ((deposit * yearlyPercent) / 12)
        console.log (finalSum)

}

dc (["2350","6","7"])

//1. Депозирана сума – реално число в интервала [100.00 … 10000.00]
//2.Срок на депозита (в месеци) – цяло число в интервала [1…12]
//3. Годишен лихвен процент – реално число в интервала [0.00 …100.00]
// сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)