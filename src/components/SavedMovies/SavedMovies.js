import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = ({ cards }) => {
  return (
    <main className="save-movies">
      <section className="save-movies__section">
      <form className="save-movies__form">
        <fieldset className="save-movies__set">
          <SearchForm />
          <FilterCheckbox />
        </fieldset>
      </form>
      <MoviesCardList cards={cards} mark="cross" />
      </section>
    </main>
  );
};

export default SavedMovies;
