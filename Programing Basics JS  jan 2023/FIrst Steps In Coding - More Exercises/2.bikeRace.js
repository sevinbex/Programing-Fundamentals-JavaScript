function bikeRace (input) {
let juniorsCount = Number(input [0]);
let seniorsCount = Number(input [1]);
let raceType = input [2];

let juniorsTax = 0;
let seniorsTax = 0;
let totalBikersTaxes = 0;
let organizationTax = 0;
let totalCompetitors = juniorsCount + seniorsCount
let totalTax = 0; 

switch (raceType) {
        case "trail":
        juniorsTax = juniorsCount * 5.5
        seniorsTax = seniorsCount * 7
        totalBikersTaxes = juniorsTax + seniorsTax
        organizationTax = totalBikersTaxes * 0.05
        totalTax = totalBikersTaxes - organizationTax
        break;
        case "cross-country":
        juniorsTax = juniorsCount * 8 // ok
        seniorsTax = seniorsCount * 9.5 // ok
        totalBikersTaxes = juniorsTax + seniorsTax // ok
        organizationTax = totalBikersTaxes * 0.05
        totalTax = totalBikersTaxes - organizationTax
        
        if (totalCompetitors >= 50) {
            totalTax = totalTax * 0.75       
        }break;
        case "downhill":
        juniorsTax = juniorsCount * 12.25
        seniorsTax = seniorsCount * 13.75
        totalBikersTaxes = juniorsTax + seniorsTax
        organizationTax = totalBikersTaxes * 0.05
        totalTax = totalBikersTaxes - organizationTax
        break;
        case "road":
        juniorsTax = juniorsCount * 20
        seniorsTax = seniorsCount * 21.5
        totalBikersTaxes = juniorsTax + seniorsTax
        organizationTax = totalBikersTaxes * 0.05
        totalTax = totalBikersTaxes - organizationTax
        break;
    }
                   
    console.log (totalTax.toFixed (2))
}

bikeRace (["30","25","cross-country"])