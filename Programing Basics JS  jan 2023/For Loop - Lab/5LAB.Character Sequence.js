function solve(input) {
  let text = input[0];
  let length = text.length; // дължина на стринга, ползва се за условие за фор цикъла
  // равна е на индексите на стринга, когато началото е 0

  for (let i = 0; i < length; i++) {
    // начало - условие - стъпка

    console.log(text[i]); // метод за взимане на буква от текст по индекс
    // console.log(text.charAt(i)); // съшия метод, само че не връща undefined а празен стринг
  }
}

solve(["softuni"]);
