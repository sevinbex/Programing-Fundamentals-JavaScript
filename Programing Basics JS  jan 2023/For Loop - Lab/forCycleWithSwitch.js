function solve (input) {
let text = input [0];        
let sum = 0;

    for (let i = 0; i < text.length ; i++) {
        switch (text[i]) {      // въртим всеки индекс от думата със стъпката на фор цикъла
            case "a":          // понеже i = 0 във фор цикъла, switch върви винаги с i
            sum = sum + 1      // и проверява за определените случаи променяйки sum      
            break;              // когато има попадение 
            case "e":
            sum = sum + 2
            break;
            case "i":
            sum = sum + 3
            break;
            case "o":
            sum = sum + 4
            break;
            case "u":
            sum = sum + 5
            break;
        }
    }

    console.log (sum)
}

solve (["beer"])