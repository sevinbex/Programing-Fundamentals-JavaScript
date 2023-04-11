function employees(list) {
  let employeeList = {}; //СЪЗДАВАМЕ ОБЕКТ

  //ИТЕРИРАМЕ ВСЕКИ ЧОВЕК В МАСИВА С FOR EACH, И ДОБАВЯМЕ КЛЮЧ И СТОЙНОСТ
  //В ОБЕКТА НА РЕД 7, КЛЮЧЪТ Е ИМЕТО НА ЧОВЕКА А СТОЙНОСТТА Е ДЪЛЖИНАТА МУ

  list.forEach((person) => {
    // FOR EACH is for ARRAYS
    employeeList[person] = person.length;
  });
  //КОГАТО ВСИЧКО СЕ ДОБАВИ ОТ ПО ГОРНИЯ ЦИКЪЛ, С FOR IN ЦИКЪЛА ПЕЧАТАМЕ
  //ПО ИЗИСКВАНИЯ РЕД ПО СЪЗДАДЕНИТЕ КЛЮЧОВЕ И СТОЙНОСТИ ИМЕТНАТА И НОМЕРАТА
  //НА РАБОТНИЦИТЕ
  for (const key in employeeList) {
    // FOR IN is for OBJECTS
    console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`);
  }
}

employees([
  "Silas Butler",

  "Adnaan Buckley",

  "Juan Peterson",

  "Brendan Villarreal",
]);
