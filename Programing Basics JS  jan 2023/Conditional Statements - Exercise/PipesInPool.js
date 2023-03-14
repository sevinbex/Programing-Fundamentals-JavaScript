function pip (input) {

    let volume = Number (input [0])
    let p1debit = Number (input [1])
    let p2debit = Number (input [2])
    let hours = Number (input [3])
    
    let pipe1work = p1debit * hours
    let pipe2work = p2debit * hours
    
    let totalPipeWork = pipe1work + pipe2work
    //let volumeFullPercent = totalPipeWork / 1000 * 100
    
    let pipe1percent = (pipe1work / totalPipeWork * 100)
    let pipe2percent = (pipe2work / totalPipeWork * 100)
    //let volumeFullPercent = pipe1percent + pipe2percent
    let volumeFullPercent = totalPipeWork / volume * 100
    
    if (totalPipeWork <= volume) {
        console.log (`The pool is ${volumeFullPercent.toFixed (2)}% full. Pipe 1: ${pipe1percent.toFixed(2)}%. Pipe 2: ${pipe2percent.toFixed(2)}%.`)
    } else {
        let overflow = (totalPipeWork - volume).toFixed(2)
        console.log (`For ${hours} hours the pool overflows with ${overflow} liters.`)
    }
    
    }
pip (["10000","5000","3600","1"])