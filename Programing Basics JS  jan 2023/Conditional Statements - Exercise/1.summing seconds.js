function solve (input) {

    let st = Number(input[0]);
    let nd = Number(input[1]);
    let rd = Number(input[2]);

    let totalTime = st + nd + rd;
    
    let minutes = Math.floor (totalTime / 60);
    let seconds = totalTime % 60;
    
    if (seconds < 10) {
        console.log (`${minutes}:0${seconds}`);
    } else {
        console.log (`${minutes}:${seconds}`);
    }
    
}

solve (["22", "7", "34"])