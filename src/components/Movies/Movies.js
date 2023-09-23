import { useEffect, useState } from 'react';
import { filterSearchMovie, filterShortCheckbox } from '../../utils/utils';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import { moviesApi } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';
import { ERROR_TEXT } from '../../utils/constans';

const Movies = ({
  savedMovies,
  onAddMovie,
  onDeleteMovie,
  preloader,
  setPreloader,
  windowSize,
}) => {
  const { notFound, anotherError } = ERROR_TEXT;
  const [errorMessage, setErrorMessage] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  const [displayMovies, setDisplayMovies] = useState([]);
  const [findMovies, setFindMovies] = useState([]);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [filterCheckbox, setFilterCheckbox] = useState(
    JSON.parse(localStorage.getItem('short-movies'))
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleFindMovies = (movies, input) => {
    const moviesList = filterSearchMovie(movies, input);

    if (moviesList.length === 0) {
      setErrorMessage(notFound);
      setMoviesNotFound(true);
      setFindMovies(moviesList);
    } else {
      setErrorMessage(
        filterCheckbox && filterShortCheckbox(moviesList).length === 0
          ? notFound
          : ''
      );
      setMoviesNotFound(
        filterCheckbox && filterShortCheckbox(moviesList).length === 0
          ? true
          : false
      );
      setFindMovies(moviesList);
    }
  };

  const handleSearchSubmit = (input) => {
    localStorage.setItem('query-movies', input);

    if (allMovies.length === 0) {
      setIsLoading(true);
      setPreloader(true);
      moviesApi
        .getMovies()
        .then((res) => {
          setAllMovies(res);
          handleFindMovies(res, input);
          localStorage.setItem('movies', JSON.stringify(res));
        })
        .finally(() => {
          setIsLoading(false);
          setPreloader(false);
        })
        .catch((err) => {
          setErrorMessage(anotherError);
          setMoviesNotFound(true);
        });
    } else {
      handleFindMovies(allMovies, input);
      setIsLoading(false);
    }
  };

  const handleFilterShorts = () => {
    setFilterCheckbox(!filterCheckbox);

    if (!filterCheckbox) {
      setFilterCheckbox(true);
      setDisplayMovies(filterShortCheckbox(findMovies));
      if (
        Array.isArray(findMovies)
          ? filterShortCheckbox(findMovies).length === 0
          : null
      ) {
        setErrorMessage(notFound);
        setMoviesNotFound(true);
        if (localStorage.getItem('movies') === null) {
          setErrorMessage(notFound);
          setMoviesNotFound(true);
        }
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
    } else {
      setFilterCheckbox(false);
      setDisplayMovies(findMovies);
      if (Array.isArray(findMovies) ? findMovies.length === 0 : null) {
        setErrorMessage(notFound);
        setMoviesNotFound(true);
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
    }
    localStorage.setItem('short-movies', !filterCheckbox);
  };

  useEffect(() => {
    const getMovies = JSON.parse(localStorage.getItem('movies'));
    const getInput = localStorage.getItem('query-movies');

    if (localStorage.getItem('movies')) {
      setFindMovies(filterSearchMovie(getMovies, getInput));
    }
  }, []);

  useEffect(() => {
    if (filterCheckbox) {
      setDisplayMovies(filterShortCheckbox(findMovies));
    } else {
      setDisplayMovies(findMovies);
    }
  }, [findMovies, filterCheckbox]);


  return (
    <main className="movies">
        <fieldset className="movies__set">
          <SearchForm
          handleSearchSubmit={handleSearchSubmit}
          isLoading={isLoading}/>
          <FilterCheckbox handleFilterShorts={handleFilterShorts}
            filterCheckbox={filterCheckbox}/>
        </fieldset>
      {!moviesNotFound ? (
        <MoviesCardList
          displayMovies={displayMovies}
          savedMovies={savedMovies}
          onDeleteMovie={onDeleteMovie}
          onAddMovie={onAddMovie}
          windowSize={windowSize}
        />
      ) : (
        <MoviesNotFound errorMessage={errorMessage} />
      )}
      {preloader ? <Preloader /> : null}
    </main>
  );
};

export default Movies;
