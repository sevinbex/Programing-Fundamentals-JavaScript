function chatLogger(input) {
  let chatWindow = [];
  let command = input.shift();
  while (command !== "end") {
    let tokens = command.split(" ");
    let action = tokens[0];
    switch (action) {
      case "Chat":
        chat(tokens[1]);
        break;
      case "Delete":
        deleteMsg(tokens[1]);
        break;
      case "Edit":
        edit(tokens[1], tokens[2]);
        break;
      case "Pin":
        pin(tokens[1]);
        break;
      case "Spam":
        spam(tokens);
        break;
    }

    command = input.shift();
  }
  function chat(message) {
    chatWindow.push(message);
  }
  function edit(oldMsg, newMsg) {
    if (chatWindow.includes(oldMsg)) {
      let editIndex = chatWindow.indexOf(oldMsg);
      chatWindow[editIndex] = newMsg;
    }
  }
  function spam(tokens) {
    for (let i = 1; i < tokens.length; i++) {
      chatWindow.push(tokens[i]);
    }
  }
  function deleteMsg(messageToDelete) {
    if (chatWindow.includes(messageToDelete)) {
      let deleteIndex = chatWindow.indexOf(messageToDelete);
      chatWindow.splice(deleteIndex, 1);
    }
  }
  function pin(messageToPin) {
    if (chatWindow.includes(messageToPin)) {
      let pinIndex = chatWindow.indexOf(messageToPin);
      let msgToMove = chatWindow.splice(pinIndex, 1);
      chatWindow.push(messageToPin);
    }
  }

  chatWindow.forEach((element) => {
    console.log(element);
  });
}

// chatLogger([
//   "Chat Hello",
//   "Chat darling",
//   "Edit darling Darling",
//   "Spam how are you",
//   "Delete Darling",
//   "end",
// ]);

// chatLogger(["Chat Hello", "Delete John", "Pin Hi", "end"]);
chatLogger([
  "Chat John",
  "Spam Let's go to the zoo",
  "Edit zoo cinema",
  "Chat tonight",
  "Pin John",
  "end",
]);
