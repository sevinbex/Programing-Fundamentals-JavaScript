function fov (input) {

let type = input [0];

    switch (type) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log ("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log ("vegetable");
            break;
        default:
            console.log ("unknown");
    }

}

fov (["water"])

//banana, apple, kiwi, cherry, lemon и grapes
//tomato, cucumber, pepper и carrot
//"unknown"