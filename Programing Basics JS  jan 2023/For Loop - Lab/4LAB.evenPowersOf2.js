function evenPowersOf2 (input) {
let n = Number (input [0])

for (let i = 0; i <= n; i+= 2){        // n - брой повторенията на стъпката
   // console.log (Math.pow (2,i))     // i - коя степен в случая
   console.log (Math.pow (2,i))        // i+= - през колко стойности да увеличава стъпката 
}                                   // Math.pow - (число / степен)

}

evenPowersOf2 (["10"])