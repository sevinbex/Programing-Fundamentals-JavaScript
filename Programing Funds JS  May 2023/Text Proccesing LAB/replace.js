let text =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam a dolor at asperiores, optio voluptatem id delectus incidunt esse sed!dolor";

// Repalce first occurance
let replacedDolor = text.replace("dolor", "softuni");
console.log(replacedDolor);

// Replace all
let word = text;
// while(replaceAllDolor.includes('dolor')) {
while (word.indexOf("dolor") >= 0) {
  word = word.replace("dolor", "softuni");
}

let rad = text.replaceAll("dolor", "softuni");
console.log(word);
