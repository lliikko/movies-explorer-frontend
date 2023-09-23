import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useValidation from '../../validation/useValidation';
import { ERROR_TEXT } from '../../utils/constans';
import './SearchForm.css';

const SearchForm = ({ handleSearchSubmit, isLoading }) => {
  const { enterKeyword } = ERROR_TEXT;
  const { values, handleChange, isValid, setIsValid } = useValidation();
  const [errorMessage, setErrorMessage] = useState('');

  const location = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      if (
        location.pathname === '/movies' &&
        localStorage.getItem('query-movies')
      ) {
        localStorage.setItem('query-movies', values.search);
      }
      handleSearchSubmit(values.search);
    } else {
      if (
        location.pathname === '/movies' &&
        localStorage.getItem('query-movies')
      ) {
        localStorage.setItem('query-movies', '');
      }
      if (location.pathname === '/saved-movies') {
        handleSearchSubmit('');
      }
      setErrorMessage(enterKeyword);
    }
  };

  useEffect(() => {
    if (
      location.pathname === '/movies' &&
      localStorage.getItem('query-movies')
    ) {
      const searchValue = localStorage.getItem('query-movies');
      values.search = searchValue;
      setIsValid(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, setIsValid]);

  useEffect(() => {
    setErrorMessage('');
  }, [isValid]);

  return (
    <div className="search-form">
      <form className="search-form__form" noValidate onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Фильм"
        className="search-form__search-input"
        id="search-movies"
        name="search"
        value={values.search || ''}
        onChange={handleChange}
        required
      />
      <button className={`search-form__search-btn ${
            !isValid ? 'search-form__search-btn_disabled' : ''
          }`}
          type="submit">
        Найти
      </button>
      </form>
      <span className="search-form__error">{errorMessage}</span>
    </div>
  );
};

export default SearchForm;
