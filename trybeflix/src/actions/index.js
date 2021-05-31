export const SELECT_MOVIE = 'SELECT_MOVIE';

export function selectMovie(selectedCategory, selectedMovie) {
  return ({
    type: SELECT_MOVIE,
    payload: {
      selectedCategory,
      selectedMovie,
    },
  });
}
