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
  selectedAnime: {
    id: "1",
    type: "anime",
    links: {
      self:
        "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1",
    },
    attributes: {
      createdAt: "2013-02-20T16:00:13.609Z",
      updatedAt: "2020-05-28T03:32:19.570Z",
      slug: "cowboy-bebop",
      synopsis:
        'In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as "Cowboys". The ragtag team aboard the spaceship Bebop are two such individuals.\r\nMellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member\'s dark and mysterious past little by little. \r\nWell-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.  \r\n[Written by MAL Rewrite]',
      coverImageTopOffset: 400,
      titles: {
        en: "Cowboy Bebop",
        en_jp: "Cowboy Bebop",
        ja_jp: "カウボーイビバップ",
      },
      canonicalTitle: "Cowboy Bebop",
      abbreviatedTitles: ["COWBOY BEBOP"],
      averageRating: "82.6",
      ratingFrequencies: {
        "2": "3254",
        "3": "51",
        "4": "394",
        "5": "29",
        "6": "164",
        "7": "31",
        "8": "3074",
        "9": "36",
        "10": "625",
        "11": "53",
        "12": "2116",
        "13": "114",
        "14": "6527",
        "15": "278",
        "16": "6990",
        "17": "555",
        "18": "8478",
        "19": "520",
        "20": "29937",
      },
      userCount: 108869,
      favoritesCount: 4414,
      startDate: "1998-04-03",
      endDate: "1999-04-24",
      nextRelease: null,
      popularityRank: 26,
      ratingRank: 76,
      ageRating: "R",
      ageRatingGuide: "17+ (violence & profanity)",
      subtype: "TV",
      status: "finished",
      tba: "",
      posterImage: {
        tiny:
          "https://media.kitsu.io/anime/poster_images/1/tiny.jpg?1431697256",
        small:
          "https://media.kitsu.io/anime/poster_images/1/small.jpg?1431697256",
        medium:
          "https://media.kitsu.io/anime/poster_images/1/medium.jpg?1431697256",
        large:
          "https://media.kitsu.io/anime/poster_images/1/large.jpg?1431697256",
        original:
          "https://media.kitsu.io/anime/poster_images/1/original.jpg?1431697256",
        meta: {
          dimensions: {
            tiny: {
              width: null,
              height: null,
            },
            small: {
              width: null,
              height: null,
            },
            medium: {
              width: null,
              height: null,
            },
            large: {
              width: null,
              height: null,
            },
          },
        },
      },
      coverImage: {
        tiny: "https://media.kitsu.io/anime/cover_images/1/tiny.jpg?1519178801",
        small:
          "https://media.kitsu.io/anime/cover_images/1/small.jpg?1519178801",
        large:
          "https://media.kitsu.io/anime/cover_images/1/large.jpg?1519178801",
        original:
          "https://media.kitsu.io/anime/cover_images/1/original.jpg?1519178801",
        meta: {
          dimensions: {
            tiny: {
              width: 840,
              height: 200,
            },
            small: {
              width: 1680,
              height: 400,
            },
            large: {
              width: 3360,
              height: 800,
            },
          },
        },
      },
      episodeCount: 26,
      episodeLength: 25,
      totalLength: 626,
      youtubeVideoId: "qig4KOK2R2g",
      showType: "TV",
      nsfw: false,
    },
    relationships: {
      genres: {
        links: {
          self:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/relationships/genres",
          related:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/genres",
        },
      },
      categories: {
        links: {
          self:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/relationships/categories",
          related:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/categories",
        },
      },
      castings: {
        links: {
          self:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/relationships/castings",
          related:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/castings",
        },
      },
      installments: {
        links: {
          self:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/relationships/installments",
          related:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/installments",
        },
      },
      mappings: {
        links: {
          self:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/relationships/mappings",
          related:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/mappings",
        },
      },
      reviews: {
        links: {
          self:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/relationships/reviews",
          related:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/reviews",
        },
      },
      mediaRelationships: {
        links: {
          self:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/relationships/media-relationships",
          related:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/media-relationships",
        },
      },
      characters: {
        links: {
          self:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/relationships/characters",
          related:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/characters",
        },
      },
      staff: {
        links: {
          self:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/relationships/staff",
          related:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/staff",
        },
      },
      productions: {
        links: {
          self:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/relationships/productions",
          related:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/productions",
        },
      },
      quotes: {
        links: {
          self:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/relationships/quotes",
          related:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/quotes",
        },
      },
      episodes: {
        links: {
          self:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/relationships/episodes",
          related:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/episodes",
        },
      },
      streamingLinks: {
        links: {
          self:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/relationships/streaming-links",
          related:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/streaming-links",
        },
      },
      animeProductions: {
        links: {
          self:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/relationships/anime-productions",
          related:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/anime-productions",
        },
      },
      animeCharacters: {
        links: {
          self:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/relationships/anime-characters",
          related:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/anime-characters",
        },
      },
      animeStaff: {
        links: {
          self:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/relationships/anime-staff",
          related:
            "https://private-anon-db231fd8ea-kitsu.apiary-proxy.com/api/edge/anime/1/anime-staff",
        },
      },
    },
  },

  //Actions
  setAnimeList: action((state, payload) => {
    state.animeList = payload.animeList;
  }),

  setRatingList: action((state, payload) => {
    state.ratingList = payload.ratingList;
  }),

  changeAnime: action((state, payload) => {
    console.log(payload);
    state.selectedAnime = payload;
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
