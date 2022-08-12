// import Bollywood from "../screens/Bollywood"
import { Alert } from 'react-native';
import {LOAD_BOLLYWOOD, REMOVE_WATCHLATER} from '../action';
import {ADD_FAVOURITES} from '../action';
import {LOAD_HOLLYWOOD} from '../action';
import {REMOVE_FAV} from '../action';
import {WATCH_LATER} from '../action';
import {LIKED} from '../action';
import { REMOVE_LIKED } from '../action';
// import {REMOVE_WATCHLATER } from '../action';

const initialState = {
  watchLater: [],
  LikedMovies: [],
  favoritesMovies: [],
  MoviesHollywood: [
    {
      _id: '1',
      name: 'Fight Club',
      releaseYear: 1999,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 8.8,
      overview:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      imgUrl:
        'https://www.researchgate.net/profile/Stefan-Bolea/publication/309717420/figure/fig1/AS:425102790664192@1478363811754/Fight-Club-movie-poster-1999.png',
      director: 'David Fincher',
    },
    {
      _id: '2',
      name: 'Uncharted',
      releaseYear: 2022,
      certificate: 'A',
      runtime: '139 min',
      genre: 'action',
      imdbRating: 8.8,
      overview:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BNjRmN2EzYTEtYzNlYy00ZDc4LWJlZDgtMDQzYjM0Njg5NmYyXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg',
      director: 'Ruben Fleischer',
    },
    {
      _id: '3',
      name: 'Eternals',
      releaseYear: 2021,
      certificate: 'A',
      runtime: '139 min',
      genre: 'action',
      imdbRating: 7.8,
      overview:
        'With Eternals, Academy Award winning director of Nomadland, Chloé Zhao sinks her teeth into the heart of American pop culture — the MCU.',
      imgUrl:
        'https://imgnew.outlookindia.com/public/uploads/articles/2021/11/6/Eternals.jpg',
      director: 'CHLOE ZHAO',
    },
    {
      _id: '4',
      name: 'Avatar',
      releaseYear: 2009,
      certificate: 'A',
      runtime: '139 min',
      genre: 'action',
      imdbRating: 9.8,
      overview:
        "It is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium. The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi ",
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg',
      director: 'James Cameron',
    },
    {
      _id: '5',
      name: 'The Dark Knight',
      releaseYear: 2008,
      certificate: 'A',
      runtime: '139 min',
      genre: 'action',
      imdbRating: 9.8,
      overview:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. ',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
      director: 'Christopher Nolan',
    },
    {
      _id: '6',
      name: 'The Matrix',
      releaseYear: 1990,
      certificate: 'A',
      runtime: '139 min',
      genre: 'action',
      imdbRating: 8.8,
      overview:
        'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence. ',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
      director: 'Lana Wachowski',
    },
    {
      _id: '7',
      name: 'Star Wars',
      releaseYear: 1977,
      certificate: 'A',
      runtime: '139 min',
      genre: 'action',
      imdbRating: 7.8,
      overview:
        "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue ",
      imgUrl:
        'https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg?region=0%2C0%2C1620%2C2400&width=960',
      director: 'George Lucas',
    },
    {
      _id: '8',
      name: 'Gladiator',
      releaseYear: 2000,
      certificate: 'A',
      runtime: '139 min',
      genre: 'action',
      imdbRating: 7.8,
      overview:
        'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      director: 'George Lucas',
    },
    {
      _id: '9',
      name: 'Joker ',
      releaseYear: 2019,
      certificate: 'A',
      runtime: '139 min',
      genre: 'drama',
      imdbRating: 8.3,
      overview:
        'A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg',
      director: 'Todd Phillips',
    },
    {
      _id: '10',
      name: 'Jaws',
      releaseYear: 1975,
      certificate: 'A',
      runtime: '139 min',
      genre: 'drama',
      imdbRating: 8.3,
      overview:
        "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1W517JeKbIMHFuTkSauSdK68uNBhY0zz-A&usqp=CAU',
      director: 'Steven Spielberg',
    },
  ],
  Movies: [
    {
      _id: '1',
      name: 'Gadar',
      releaseYear: 2001,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 8.8,
      overview:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imgUrl:
        'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/gadar--ek-prem-katha-et00002956-24-03-2017-19-52-43.jpg',
    },
    {
      _id: '2',
      name: 'Kabir Singh',
      releaseYear: 1999,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 8.8,
      overview:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imgUrl:
        'https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/12/allu-arjun-opens-up-about-his-plans-for-pushpa-2-001.jpg',
    },
    {
      _id: '3',
      name: 'Jung',
      releaseYear: 1999,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 8.8,
      overview:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BMTI5MzgxOTYyNV5BMl5BanBnXkFtZTcwMjgxNDE0MQ@@._V1_.jpg',
    },
    {
      _id: '4',
      name: 'RRR',
      releaseYear: 2022,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 8.8,
      overview:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    },
    {
      _id: '5',
      name: 'Pushpa',
      releaseYear: 2022,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 9,
      overview:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imgUrl:
        'https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/12/allu-arjun-opens-up-about-his-plans-for-pushpa-2-001.jpg',
    },
    {
      _id: '6',
      name: 'Jannat',
      releaseYear: 2004,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 9,
      overview:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imgUrl:
        'https://images-na.ssl-images-amazon.com/images/I/91iiaDveGFL._RI_.jpg',
    },
    {
      _id: '7',
      name: 'Rockstar',
      releaseYear: 1999,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 8.8,
      overview:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BOTc3NzAxMjg4M15BMl5BanBnXkFtZTcwMDc2ODQwNw@@._V1_.jpg',
    },
    {
      _id: '8',
      name: 'War',
      releaseYear: 1999,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 8.8,
      overview:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BNTlmNDMzOWQtYzg4Ny00OWQ0LWFhN2MtNmQ2MDczZGZhNTU5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    },
    {
      _id: '9',
      name: 'Dabang',
      releaseYear: 1999,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 8.8,
      overview:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imgUrl:
        'https://i2.cinestaan.com/image-bank/1500-1500/37001-38000/37342.jpg',
    },
    {
      _id: '10',
      name: 'Gabbar',
      releaseYear: 1999,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 8.8,
      overview:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imgUrl:
        'https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/95/73/0_q7ct0csh_1531492829698_l_medium.jpg',
    },
  ],
};

export default function MovieReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOLLYWOOD:
      return {
        Movies: [...state.Movies, action.Movie],
      };
    case LOAD_HOLLYWOOD:
      return {
        MoviesHollywood: [...state.MoviesHollywood, action.Movie],
      };

    case ADD_FAVOURITES:
      const abc = state.favoritesMovies.includes(action.payload);
      if (!abc) {
        return {
          ...state,
          favoritesMovies: [...state.favoritesMovies, action.payload],
        };
      } else {
        return {
          ...state,
        };
      }

    case LIKED:
      const abc3 = state.LikedMovies.includes(action.payload);
      if (!abc3) {
        return {
          ...state,
          LikedMovies: [...state.LikedMovies, action.payload],
          
        }
      } else {
        return {
          ...state,
        };
      }

    case WATCH_LATER:
      const abc2 = state.watchLater.includes(action.payload);
      if (!abc2) {
        return {
          ...state,
          watchLater: [...state.watchLater, action.payload],
        };
      } else {
        return {
          ...state,
        };
      }
    case REMOVE_FAV:
      console.log('remove from Save is working');
      console.log(action.payload)
      const selecteditem = state.favoritesMovies.find(
        item => item.name === action.payload.name,
      );
      console.log(selecteditem);
      if (selecteditem) {
        const data = state.favoritesMovies.filter(
          fMovies => fMovies.name !== action.payload.name,
        );
        return {
          ...state,
          favoritesMovies: data,
        };
      }
    case REMOVE_WATCHLATER:
      console.log('remove from Save is working');
      console.log(action.payload)
      const Rselecteditem = state.watchLater.find(
        item => item.name === action.payload.name,
      );
      console.log(Rselecteditem);
      if (Rselecteditem) {
        const data = state.watchLater.filter(
          WMovies => WMovies.name !== action.payload.name,
        );
        return {
          ...state,
          watchLater: data,
        };
      }
    case REMOVE_LIKED:
      console.log('remove from Save is working');
      console.log(action.payload)
      const Likedselecteditem = state.LikedMovies.find(
        item => item.name === action.payload.name,
      );
      console.log(Likedselecteditem);
      if (Likedselecteditem) {
        const data = state.LikedMovies.filter(
          LMovies => LMovies.name !== action.payload.name,
          
        );
        return {
          ...state,
          LikedMovies: data,
        };
      }
    default:
      return state;
  }
}
