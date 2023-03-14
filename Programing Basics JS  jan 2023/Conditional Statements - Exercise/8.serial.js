function serials (input) {
let serial = input [0]
let duration = Number (input [1])
let pause = Number (input [2])

let lunch = (pause * 1/8)
let refreshing = (pause * 1/4)

let totalTimeNeed = duration + lunch + refreshing

if (totalTimeNeed <= pause ) {
    let timeleft = Math.ceil(pause - totalTimeNeed)

    console.log (`You have enough time to watch ${serial} and left with ${timeleft} minutes free time.`)
} else {
    let timeNeed = Math.ceil (totalTimeNeed - pause)
    console.log (`You don't have enough time to watch ${serial}, you need ${timeNeed} more minutes.`)
}


}

serials (["Game of Thrones","60","96"])