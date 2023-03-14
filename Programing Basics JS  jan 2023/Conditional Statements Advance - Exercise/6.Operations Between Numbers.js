function obns (input) {

    let num1 = Number (input [0]);
    let num2 = Number (input [1]);
    let operator = (input [2]);
    let sum = 0;
    let OddOrEven = ''

    if (operator == "+") {
        sum = num1 + num2;
        if (sum % 2 == 0){
            OddOrEven = "even"
        } else {
            OddOrEven = "odd"
        } console.log (`${num1} ${operator} ${num2} = ${sum} - ${OddOrEven}`)
    } else if (operator == "-") {
        sum = num1 - num2;
        if (sum % 2 == 0){
            OddOrEven = "even"
        } else {
            OddOrEven = "odd"
        }console.log (`${num1} ${operator} ${num2} = ${sum} - ${OddOrEven}`)
    }else if (operator == "*") {
        sum = num1 * num2;
        if (sum % 2 == 0){
            OddOrEven = "even"
        } else {
            OddOrEven = "odd"
        }console.log (`${num1} ${operator} ${num2} = ${sum} - ${OddOrEven}`) 
        
    }else if (operator == "/") {
        if (num2 == 0) {
            console.log (`Cannot divide ${num1} by zero`)            
        } else {
            sum = num1 / num2
            console.log (`${num1} / ${num2} = ${sum.toFixed (2)}`)
        }
    }else if (operator == "%") {
        if (num2 == 0) {
            console.log (`Cannot divide ${num1} by zero`)
        }else {
        sum = num1 % num2
        console.log (`${num1} % ${num2} = ${sum}`)
        }
    }
}

obns (["112", "0", "/"])