const fs = require("fs");

function readSongs(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");

    const songs = JSON.parse(data);

    if (songs && songs.data) return songs.data;
    throw new Error("Song data doesn't exist");
  } catch (err) {
    console.error("Error reading or parsing the file:", err);
    throw err;
  }
}

const songs = readSongs(
  "C:\\Work\\ZettaByte\\Tasks\\JAVASCRIPT\\js_day_7\\listOfSongs.json"
);

function groupByArtist(artist) {
  if (!artist) throw new Error("artist parameter is null");
  const groupedByArtist = songs.filter(
    (song) => song.artist.toLowerCase() == artist.toLowerCase()
  );
  return groupedByArtist;
}

function groupByGenre(genre) {
  if (!genre) throw new Error("genre parameter is null");
  const groupedByGenre = songs.filter(
    (song) => song.genre.toLowerCase() == genre.toLowerCase()
  );
  return groupedByGenre;
}

function groupRandomSongs() {
  let duration = 0;
  let groupedRandomSongs = [];
  let songsCopy = [...songs];
  while (songsCopy && songsCopy.length) {
    const randomNumber = Math.floor(Math.random() * songsCopy.length);
    const randomSong = songsCopy.splice(randomNumber, 1)[0];
    if (!(randomSong && randomSong.duration)) continue;
    if (randomSong.duration + duration > 3600) break;
    groupedRandomSongs.push(randomSong);
    duration += randomSong.duration;
  }

  return {
    totalDuration: duration,
    listOfSongs: groupedRandomSongs,
  };
}

const command = {
  artist: (artistName) => {
    console.log(groupByArtist(artistName));
  },
  genre: (genreName) => {
    console.log(groupByGenre(genreName));
  },
  random: () => {
    console.log(groupRandomSongs());
  },
};

const args = process.argv.slice(2);

if (args.length < 1) {
  console.error("Please provide a flag and a value.");
  process.exit(1);
}

const [flag, value] = args;

if (command[flag]) command[flag](value);
else console.log("Command flag don't exist");
