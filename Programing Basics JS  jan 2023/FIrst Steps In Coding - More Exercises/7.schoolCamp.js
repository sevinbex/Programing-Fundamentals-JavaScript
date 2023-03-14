function schoolCamp (input) {

let season = input [0];
let groupType = input [1];
let studentsCount = Number (input [2]);
let nightsCount = Number (input [3]);
let sport = "";
let totalCost = 0;


    switch (season) {
        case "Winter":
            switch (groupType) {
            case "boys":
            sport = "Judo"
            totalCost = nightsCount * 9.6 * studentsCount
            break;
            case "girls":
            sport = "Gymnastics" 
            totalCost = nightsCount * 9.6 * studentsCount
            break;
            case "mixed":
            sport = "Ski"
            totalCost = nightsCount * 10 * studentsCount     
            break;   
        } break;

        case "Spring":
            switch (groupType) {
            case "boys":
            sport = "Tennis"
            totalCost = nightsCount * 7.2 * studentsCount
            break;
            case "girls":
            sport = "Athletics"   
            totalCost = nightsCount *  7.2 * studentsCount
            break;
            case "mixed":
            sport = "Cycling"
            totalCost = nightsCount * 9.5 * studentsCount     
            break;   
            
        }break;

        case "Summer":
            switch (groupType) {
                case "boys":
                sport = "Football"
                totalCost = nightsCount * 15 * studentsCount
                break;
                case "girls":
                sport = "Volleyball"   
                totalCost = nightsCount *  15 * studentsCount
                break;
                case "mixed":
                sport = "Swimming"
                totalCost = nightsCount * 20 * studentsCount     
                break;  
            }break;
        
    }

    if (studentsCount >= 50) {
        totalCost *= 0.5
    } else if (studentsCount >= 20 && studentsCount < 50) {
        totalCost *= 0.85
    } else if (studentsCount >= 10 && studentsCount < 20) {
        totalCost *= 0.95
    }

    
    console.log (`${sport} ${totalCost.toFixed (2)} lv.`)
}

schoolCamp 
(["Spring",
    "mixed",
    "17",
    "14"])