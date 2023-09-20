import './SearchForm.css';

const SearchForm = () => {
  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="Фильм"
        className="search-form__search-input"
        id="search-movies"
        name="search"
        required
      />
      <button className="search-form__search-btn" type="submit">
        Найти
      </button>
    </div>
  );
};

export default SearchForm;
