function gramophone(bandName, AlbumName, songName) {
  let time = (AlbumName.length * bandName.length * songName.length) / 2;
  let rotate = Math.ceil(time / 2.5);
  console.log(`The plate was rotated ${rotate} times.`);
}

gramophone(
  "Black Sabbath",
  "Paranoid",

  "War Pigs"
);
