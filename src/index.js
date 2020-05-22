import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider, createStore, action } from "easy-peasy";

const animeModel = {
  animeList: [],
  ratingList: [],
  searchResult: [],
  selectedIndex: -1,

  //Actions
  setAnimeList: action((state, payload) => {
    state.animeList = payload.animeList;
  }),
  
  setRatingList: action((state, payload) => {
    state.ratingList = payload.ratingList;
  }),

  changeAnime: action((state, payload) => {
    state.selectedIndex = payload.index;
  }),

  searchAnime: action((state, payload) => {
    state.searchResult = state.animeList.filter((anime) =>
      anime.attributes.canonicalTitle.toLowerCase().includes(payload.searchTerm)
    );
  }),
};

const store = createStore({
  anime: animeModel,
});

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
