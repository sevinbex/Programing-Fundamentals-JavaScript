function password(pwd) {
  let passwordLength = pwd.length;
  let digitCount = 0;
  let AbcCount = 0;
  let isValid = false;
  let AnotherCharacters = false;
  for (let i = 0; i <= passwordLength - 1; i++) {
    let currentChar = pwd[i];
    let asciiValueOfChar = currentChar.charCodeAt();
    if (
      (asciiValueOfChar > 0 && asciiValueOfChar < 48) ||
      (asciiValueOfChar > 57 && asciiValueOfChar < 65) ||
      (asciiValueOfChar > 90 && asciiValueOfChar < 97)
    ) {
      AnotherCharacters = true;
    }
    if (asciiValueOfChar < 58 && asciiValueOfChar > 47) {
      digitCount += 1;
    }
    if (asciiValueOfChar < 91 && asciiValueOfChar > 64) {
      AbcCount += 1;
    }
    if (asciiValueOfChar < 123 && asciiValueOfChar > 96) {
      AbcCount += 1;
    }
  }

  if (passwordLength < 11 && passwordLength > 5 && digitCount > 1) {
    isValid = true;
    console.log("Password is valid");
  }

  if (!isValid) {
    if (passwordLength < 6 || passwordLength > 10) {
      console.log("Password must be between 6 and 10 characters");
    }
    if (AnotherCharacters) {
      console.log("Password must consist only of letters and digits");
    }
    if (digitCount < 2) {
      console.log("Password must have at least 2 digits");
    }
  }
}

// password("MyPass123");
// password("logIn");
password("Pa$s$s");
