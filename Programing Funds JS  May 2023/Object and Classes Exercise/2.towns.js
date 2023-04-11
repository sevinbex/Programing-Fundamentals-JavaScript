function towns(array) {
  let townInfo = {}; // СЪЗДАВАМЕ ОБЕКТ
  // С FOR OF ЦИКЪЛА ИТЕРИРАМЕ ПО ИНПУТНИЯ МАСИВ
  for (const line of array) {
    // СПЛИТВАМЕ ВСЕКИ ЕЛЕМЕНТ ОТ МАСИВА НА ЧАСТИТЕ КОИТО НИ ТРЯБВАТ
    // let splittedLine = line.split(" | ");
    // //СЪЗДАВАМЕ ПРОМЕНЛИВИ, КОИТО ЩЕ ПОЛЗВАМЕ

    // НОРМАЛЕН НАЧИН
    // let town = splittedLine[0];
    // let latitude = Number(splittedLine[1]).toFixed(2);
    // let longitude = Number(splittedLine[2]).toFixed(2);

    //ЧРЕЗ ДЕСТРУКТУРИРАНЕ
    let [town, latitude, longitude] = line.split(" | ");

    // ПРИБАВЯМЕ КЛЮЧ И СТОЙНОСТ В ОБЕКТА
    townInfo.town = town;
    townInfo.latitude = Number(latitude).toFixed(2); //КОГАТО Е С ДЕСТРУК-
    townInfo.longitude = Number(longitude).toFixed(2); //ТУРИРАНЕ.
    // ЛОГВАМЕ ГОТОВИЯ ОБЕКТ
    console.log(townInfo);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
