// Esse é o arquivo inteiro da Store. Antes do passo de dividir cada arquivo em sua pasta :)

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoriesData from '../data';

const SELECT_MOVIE = 'SELECT_MOVIE';

export function selectMovie(selectedCategory, selectedMovie) {
  return {
    type: SELECT_MOVIE,
    payload: {
      selectedCategory,
      selectedMovie,
    },
  };
}

const INITIAL_STATE = {
  selectedCategory: {},
  selectedMovie: {},
  categories: categoriesData,
};

function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SELECT_MOVIE:
    return {
      ...state,
      selectedCategory: action.payload.selectedCategory,
      selectedMovie: action.payload.selectedMovie,
    };
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  movies: movieReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
