import { combineReducers } from "redux";

const songList = [
  { name: "Uzbek", time: "3:12", author: "Uzim" },
  { name: "Russia", time: "3:02", author: "Sergey" },
  { name: "USA", time: "3:32", author: "Alex" },
  { name: "Uzbek", time: "3:43", author: "Dilshod" },
];

const songListReducer = (history = songList, song) => {
  return songList;
};

const selectSongReducer = (history = [], selectedSong) => {
  if (selectedSong.type === "SELECTED") {
    return selectedSong.payload;
  }
  return history;
};

const allReducer = combineReducers({
  songList: songListReducer,
  selectedSong: selectSongReducer,
});

export default allReducer;
