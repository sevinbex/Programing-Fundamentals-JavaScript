function test() {
  for (let i = 48; i <= 57; i++) {
    let currentChar = String.fromCharCode(i);
    console.log(currentChar);
  }

  for (let i = 65; i <= 90; i++) {
    let currentCapitalLetter = String.fromCharCode(i);
    console.log(currentCapitalLetter);
  }

  for (let i = 97; i <= 122; i++) {
    let currentLetter = String.fromCharCode(i);
    console.log(currentLetter);
  }
}
test();
