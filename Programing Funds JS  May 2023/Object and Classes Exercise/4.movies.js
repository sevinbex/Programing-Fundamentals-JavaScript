function objectsDemo(list) {
  let movies = []; // СЪЗДАВАМЕ ПРАЗЕН МАСИВ лол

  list.forEach((line) => {
    // С FOR EACH ОБХОЖДАМЕ ЕЛЕМЕНТИТЕ ПО ИНПУТНИЯ МАСИВ
    if (line.includes("addMovie ")) {
      // АКО КОМЕНДАТА Е ЗА ДОБАВЯНЕ НА ЗАГЛАВИЕ
      let name = line.split("addMovie ")[1]; // СПЛИТВАМЕ И ВЗЕМАМЕ ЕЛЕМЕНТА СЛЕД КОМАНДАТА КАТО ЗАГЛАВИЕ
      movies.push({ name: name }); // PUSHVAME ИМЕТО НА ФИЛМА КАТО ОБЕКТ В МАСИВ! ОБЕКТА Е С ИМЕ ЗАГЛАВИЕ НА ФИЛМА
    } else if (line.includes("directedBy")) {
      // АКО КОМАНДАТА ВКЛЮЧВА ИМЕТО НА ДИРЕКТОРА
      let [name, director] = line.split(" directedBy "); // СПЛИТВАМЕ ЗА ЗАГЛАВИЕ И ИМЕ НА ДИРЕКТОР
      let movie = movies.find((el) => el.name === name); // ПРОВЕРЯВАМЕ ДАЛИ ЗАГЛАВИЕТО ВЕЧЕ СЪЩЕСТВУВА В [{ТУК}]
      if (movie) {
        //АКО СЪЩЕСТВУВА ОБЕКТ С ТОВА ЗАГЛАВИЕ,
        movie.director = director; // НА ТОЗИ ОБЕКТ МУ ДОБАВЯМЕ КЛЮЧ ДИРЕКТОР СЪС СТОЙНОСТ ИМЕТО НА ДИРЕКТОРА
      }
    } else if (line.includes("onDate")) {
      // ПРОВЕРЯВАМЕ ЗА КЛЮЧА ЗА ДАТА
      let [name, date] = line.split(" onDate "); // АКО СЪЩЕСТВУВА, СПЛИТВАМЕ ЗА ДА ВЗЕМЕМ ЗАГЛАВИЕТО И ДАТАТА
      let movie = movies.find((el) => el.name === name); // ПРОВЕРЯВАМЕ ОБЕКТИТЕ В МАСИВА, ДАЛИ ИМА ТАКОВА ЗАГЛАВИЕ

      if (movie) {
        // АКО ИМА ТАКЪВ ОБЕКТ В МАСИВА,
        movie.date = date; // ДОБАВЯМЕ МУ КЛЮЧ ЗА ДАТА И СТОЙНОСТ ДАТАТА
      }
    }
  });

  movies.forEach((movie) => {
    //
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  });
}

//“node <a>.js”

objectsDemo([
  "addMovie Fast and Furious",

  "addMovie Godfather",

  "Inception directedBy Christopher Nolan",

  "Godfather directedBy Francis Ford Coppola",

  "Godfather onDate 29.07.2018",

  "Fast and Furious onDate 30.07.2018",

  "Batman onDate 01.08.2018",

  "Fast and Furious directedBy Rob Cohen",
]);
