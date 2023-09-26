import './ShowMore.css';

const ShowMore = ({ setIndex, showMovies, showCards, filter }) => {
  return (
    <div className="show-more">
      {showMovies.length >= showCards.total &&
        showMovies.length < filter.length && (
          <button
            className="show-more__button"
            type="submit"
            onClick={setIndex}
          >
            Ещё
          </button>
        )}
    </div>
  );
};

export default ShowMore;
