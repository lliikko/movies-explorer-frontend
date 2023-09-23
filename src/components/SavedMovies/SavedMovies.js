import { useEffect, useState } from 'react';
import { ERROR_TEXT } from '../../utils/constans';
import { filterSearchMovie, filterShortCheckbox } from '../../utils/utils';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = ({ savedMovies, onDeleteMovie, windowSize }) => {
  const [filterCheckbox, setFilterCheckbox] = useState(false);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [displayMovies, setDisplayMovies] = useState(savedMovies);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputInquery, setInputInquery] = useState('');
  const { notFound } = ERROR_TEXT;
  const handleSearchSubmit = (input) => {
    setInputInquery(input);
  };

  const handleFilterShorts = () => {
    setFilterCheckbox(!filterCheckbox);
  };

  useEffect(() => {
    const moviesList = filterSearchMovie(savedMovies, inputInquery);
    setDisplayMovies(
      filterCheckbox ? filterShortCheckbox(moviesList) : moviesList
    );
  }, [filterCheckbox, inputInquery, savedMovies]);

  useEffect(() => {
    if (displayMovies.length === 0) {
      setErrorMessage(notFound);
      setMoviesNotFound(true);
    } else {
      setErrorMessage('');
      setMoviesNotFound(false);
    }
  }, [displayMovies, notFound]);


  return (
    <main className="save-movies">
      <section className="save-movies__section">
      <div className="save-movies__form">
        <fieldset className="save-movies__set">
          <SearchForm handleSearchSubmit={handleSearchSubmit}/>
          <FilterCheckbox filterCheckbox={filterCheckbox}
            handleFilterShorts={handleFilterShorts}/>
        </fieldset>
      </div>
      </section>
      {!moviesNotFound ? (
        <MoviesCardList
          displayMovies={displayMovies}
          savedMovies={displayMovies}
          onDeleteMovie={onDeleteMovie}
          errorMessage={errorMessage}
          windowSize={windowSize}
        />
      ) : (
        <MoviesNotFound errorMessage={errorMessage} />
      )}
    </main>
  );
};

export default SavedMovies;
