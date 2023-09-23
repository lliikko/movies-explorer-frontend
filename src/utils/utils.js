import { MOVIE_DURATION } from './constans';

export const changeTime = (time) => {
  const hours = Math.trunc(time / 60);
  const minutes = time % 60;
  return hours === 0 ? `${minutes}м` : `${hours}ч ${minutes}м`;
};

export const getSavedMovies = (arr, movie) => {
  return arr.find((item) => {
    return item.movieId === movie.id;
  });
};

export const filterShortCheckbox = (movies) => {
  return Array.isArray(movies)
    ? movies.filter((movie) => movie.duration < MOVIE_DURATION)
    : null;
};

export const filterSearchMovie = (movies, query) => {
  const movieNameByUser = movies.filter((movie) => {
    const nameRu = String(movie.nameRU).toLowerCase();
    const nameEn = String(movie.nameEN).toLowerCase();
    const userMovie = query.toLowerCase();
    return nameRu.indexOf(userMovie) !== -1 || nameEn.indexOf(userMovie) !== -1;
  });

  return movieNameByUser;
};
