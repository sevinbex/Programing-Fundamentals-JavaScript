function songus(array) {
  class Song {                                          // СЪЗДАВАНЕ НА КЛАС ПЕСНИ
    constructor(typeOfSong, nameOfSong, timeOfSong) {      
                                                        //     ФАБРИКА
      this.type = typeOfSong;                           //   ЗА СЪЗДАВАНЕ
      this.name = nameOfSong;                           //   НА ПЕСНИ
      this.time = timeOfSong;                           //
    }
  }

  let songs = [];                                       // НОВ МАСИВ ЗА ПЕСНИТЕ
  let numberOfSongs = array.shift();                    // БРОЙ НА ПЕСНИТЕ от ИНПУТА
  let typeSong = array.pop();                           // ТИПА ПЕСНИ, КОИТО ТРЯБВА ДА СЕ ВИЗУАЛИЗИРАТ

  for (let i = 0; i < numberOfSongs; i++) {             //ЦИКЪЛ ЗА ОБХОЖДАНЕ НА ИНПУТ
    let [type, name, time] = array[i].split("_");       //ДЕСТРУКТУРИРАНЕ НА ЕЛЕМЕНТИТЕ НА МАСИВА
    let song = new Song(type, name, time);              //СЪЗДАВАНЕ НА ПЕСЕН - носи деструктурирание променливи
    songs.push(song);                                   //ВМЪКВАНЕ НА СЪЗДАДЕНАТА ПЕСЕН В НОВИЯ МАСИВ
  }

  if (typeSong === "all") {                             //ПРОВЕРКА ЗА ТИПА НА ПЛЕЙЛИСТА
    songs.forEach((i) => console.log(i.name));          //ЦИКЪЛ ЗА ВИЗУАЛИЗИРАНЕ НА ИМЕТО НА ВСЯКА ПЕСЕН ПО УСЛОВИЕ
  } else {                                              //ВСИЧКИ ОСТАНАЛИ СЛУЧАИ
    let filtered = songs.filter((i) => i.type === typeSong); // ПРОВЕРКА ПО ТИП (ДАЛИ ОТГОВАРЯ НА УСЛОВИЕТО)
    filtered.forEach((i) => console.log(i.name));       // ЦИКЪЛ ЗА ВИЗУАЛИЗИРАНЕ НА ОТГОВАРЯЩАТА ПЕСЕН
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
