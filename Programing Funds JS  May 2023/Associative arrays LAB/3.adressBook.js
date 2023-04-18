function book(list) {
  const adressBook = {};

  for (const line of list) {
    let [name, adress] = line.split(":");
    adressBook[name] = adress;
  }

  let adressBookArr = Object.entries(adressBook);
  adressBookArr.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));
  let sortedAdressBook = Object.fromEntries(adressBookArr);

  for (const person in sortedAdressBook) {
    console.log(`${person} -> ${sortedAdressBook[person]}`);
  }
}

book([
  "Bob:Huxley Rd",

  "John:Milwaukee Crossing",

  "Peter:Fordem Ave",

  "Bob:Redwing Ave",

  "George:Mesta Crossing",

  "Ted:Gateway Way",

  "Bill:Gateway Way",

  "John:Grover Rd",

  "Peter:Huxley Rd",

  "Jeff:Gateway Way",

  "Jeff:Huxley Rd",
]);
