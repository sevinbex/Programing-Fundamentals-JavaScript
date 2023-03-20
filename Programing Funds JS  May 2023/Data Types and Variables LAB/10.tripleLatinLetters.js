function trippleLetters(n) {
  let Nnum = Number(n);
  for (let i = 97; i < 97 + Nnum; i++) {
    let firstLetter = String.fromCharCode(i);
    for (let j = 97; j < 97 + Nnum; j++) {
      let secondLetter = String.fromCharCode(j);
      for (let k = 97; k < 97 + Nnum; k++) {
        let thirdLetter = String.fromCharCode(k);
        console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
      }
    }
  }
}

trippleLetters(3);
