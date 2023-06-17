function passwordReset(input) {
  let password = input.shift();

  for (let line of input) {
    if (line === "Done") {
      break;
    }

    let [command, paramOne, paramTwo] = line.split(" ");

    //Взимаме само знаците с нечетни индекси и ги свързваме, за са получим новата необработена парола
    if (command === "TakeOdd") {
      password = [...password]
        .filter((el, index) => {
          return index % 2 !== 0;
        })
        .join("");
      console.log(password);
    }

    //Получаваме подниза с дадена дължина, започващ от дадения индекс от паролата и премахва първото му срещане
    if (command === "Cut") {
      let index = Number(paramOne);
      let length = Number(paramTwo);

      let deleted = password.substring(index, index + length);
      password = password.replace(deleted, "");

      console.log(password);
    }

    //Ако необработената парола съдържа дадения подниз, замества всички негови срещания с дадения заместващ текст
    if (command === "Substitute") {
      let substring = paramOne;
      let substitute = paramTwo;

      if (password.includes(substring)) {
        password = password.split(substring).join(substitute);

        console.log(password);
      } else {
        console.log(`Nothing to replace!`);
      }
    }
  }
  console.log(`Your password is: ${password}`);
}
