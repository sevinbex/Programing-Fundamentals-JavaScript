function flowers (input) {
let chrysanthemumCount= Number (input[0]);
let rosesCount = Number (input[1]);
let tulipCount = Number (input [2]);
let season = input [3];
let celebOrNot = input [4];

let totalFlowersCount = chrysanthemumCount + rosesCount + tulipCount;
let totalFlowersPrice = 0;

    switch (season) {
        case "Spring":
        chrysanthemumPrice = chrysanthemumCount * 2
        rosesPrice = rosesCount * 4.1
        tulipPrice = tulipCount * 2.5
        totalFlowersPrice = chrysanthemumPrice + rosesPrice + tulipPrice
        break;
        case "Summer":
        chrysanthemumPrice = chrysanthemumCount * 2
        rosesPrice = rosesCount * 4.1
        tulipPrice = tulipCount * 2.5
        totalFlowersPrice = chrysanthemumPrice + rosesPrice + tulipPrice
        break;
        case "Autumn":
        chrysanthemumPrice = chrysanthemumCount * 3.75
        rosesPrice = rosesCount * 4.5
        tulipPrice = tulipCount * 4.15
        totalFlowersPrice = chrysanthemumPrice + rosesPrice + tulipPrice
        break;
        case "Winter":
        chrysanthemumPrice = chrysanthemumCount * 3.75
        rosesPrice = rosesCount * 4.5
        tulipPrice = tulipCount * 4.15
        totalFlowersPrice = chrysanthemumPrice + rosesPrice + tulipPrice
        break;
    }

    if (celebOrNot == "Y") {
        totalFlowersPrice *= 1.15
    }
    
    if (season == "Spring" && tulipCount > 7 ) {
        totalFlowersPrice *= 0.95
    }  
    
    if (season == "Winter" && rosesCount >= 10) {
        totalFlowersPrice *= 0.90
    }  
    
    if (totalFlowersCount > 20) {
        totalFlowersPrice *= 0.80
    }
        let lastPrice = totalFlowersPrice + 2

        console.log (lastPrice.toFixed (2))


}

flowers (["10","10","10","Autumn","N"])