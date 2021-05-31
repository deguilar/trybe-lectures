import { SELECT_MOVIE } from '../actions/index';
import categories from '../data';

const INITIAL_STATE = {
  categories,
  selectedMovie: categories[0].movies[0],
  selectedCategory: categories[0],
};

export default function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SELECT_MOVIE:
    return {
      ...state,
      selectedMovie: action.payload.selectedMovie,
      selectedCategory: action.payload.selectedCategory,
    };
  default:
    return state;
  }
}
