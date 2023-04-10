function printInfo(name, surname, age) {
  // параметри на инпута
  let info = {
    // създаване на обекта
    firstName: name, // вътрешните параметри на обекта трябва да са еднакви с параметрите на функцията ??
    lastName: surname,
    age: age,
  };

  return info;
}

printInfo("Peter", "Pan", "20");
