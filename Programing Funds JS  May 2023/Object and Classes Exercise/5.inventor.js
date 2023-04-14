function inventory(list) {
  let heroes = []; //МАСИВ ЗА ДА СЪДЪРЖА ОБЕКТИТЕ С ГЕРОИ

  list.forEach((line) => {
    // ОБХОЖДАНЕ НА ИНПУТ МАСИВА
    let [name, level, items] = line.split(" / "); // СПЛИТВАНЕ НА ПРОМЕНЛИВИ НА ВСЕКИ LINE
    let currentHero = {
      // СЪЗДАВАНЕ НА НОВ ОБЕКТ В МАСИВА, НОВ ГЕРОЙ
      name, // ПО ТОЗИ НАЧИН МОЖЕМ ДА НАПИШЕМ ПО-КРАТКО КЛЮЧОВЕ И СТОЙНОСТИ В ОБЕКТА
      //name:name,                      // АКО ИМЕНАТА ИМ СА ЕДНАКВИ КАКТО В СЛУЧАЯ
      level: Number(level), // ВАЖНО!!! КОГАТО ИМАМЕ ЧИСЛО, ДА СМЕ СИГУРНИ ЧЕ ГО ВЗЕМАМЕ
      //level:level,        // КАТО ТАКОВА, ЗА ДА НИ РАБОТИ СОРТИРАНЕТО ДОЛУ ПО УСЛОВИЕ
      items,
      //items:items,
    };
    heroes.push(currentHero); // ВКАРВАМЕ СЪЗДАДЕНИЯ ОБЕКТ (ГЕРОЙ) В МАСИВА ЗА ГЕРОИ
  });
  //   console.log(heroes);
  heroes.sort((a, b) => a.level - b.level); // СОРТИРАНЕ СЪС СОРТ ОТ ПО-МАЛКО КЪМ ПО-ГОЛЯМО
  heroes.forEach((hero) => {
    // ОБХОЖДАМЕ ОБЕКТИТЕ В МАСИВА ЕДИН ПО ЕДИН С FOR EACH
    console.log(`Hero: ${hero.name}`); // ЛОГВАЙКИ ПО ДАДЕНИЯ НАЧИН ПО УСЛОВИЕ
    console.log(`level => ${hero.level}`); // ИМЕТО НА МАСИВА.КЛЮЧА НА ПРОПЪРТИТО
    console.log(`items => ${hero.items}`);
  });
}

inventory([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
