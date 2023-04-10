function songus(array) {
  class Song {
    constructor(typeOfSong, nameOfSong, timeOfSong) {
      this.type = typeOfSong;
      this.name = nameOfSong;
      this.time = timeOfSong;
    }
  }

  let songs = [];
  let numberOfSongs = array.shift();
  let typeSong = array.pop();

  for (let i = 0; i < numberOfSongs; i++) {
    let [type, name, time] = array[i].split("_");
    let song = new Song(type, name, time);
    songs.push(song);
  }

  if (typeSong === "all") {
    songs.forEach((i) => console.log(i.name));
  } else {
    let filtered = songs.filter((i) => i.type === typeSong);
    filtered.forEach((i) => console.log(i.name));
  }
}

songus([
  3,

  "favourite_DownTown_3:14",

  "favourite_Kiss_4:16",

  "favourite_Smooth Criminal_4:01",

  "favourite",
]);

// songus([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
