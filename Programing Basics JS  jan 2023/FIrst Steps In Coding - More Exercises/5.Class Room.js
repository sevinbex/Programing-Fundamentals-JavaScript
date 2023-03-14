function tl (input) {
    let lenght = Number(input [0])
    let width =  Number(input [1])
    let coridor = 100
    let lenghtInCm = lenght * 100
    let widthInCm = width * 100 - coridor
    
    let totalDesks = Math.trunc (widthInCm / 70)
    let totalLines = Math.trunc (lenghtInCm / 120) 
    
    let door = 1
    let catedre = 2
    
    let result = (totalDesks * totalLines) - door - catedre
    console.log (result)
    }
    
    tl (["8.4","5.2"])