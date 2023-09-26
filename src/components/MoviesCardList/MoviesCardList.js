import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import ShowMore from '../ShowMore/ShowMore';
import { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';
import { PAGE_COL } from '../../utils/constans';
import { getSavedMovies } from '../../utils/utils';

const MoviesCardList = ({ displayMovies,
  savedMovies,
  onAddMovie,
  onDeleteMovie,
  windowSize, }) => {
    const [filter, setFilter] = useState([]);
    const [showMovies, setShowMovies] = useState([]);
    const [showCards, setShowCards] = useState({ total: 16, load: 4 });

    const location = useLocation();

    const { desktop, tablet, mobile } = PAGE_COL;

    const handleLoadMore = () => {
      const learMore = filter.length - showMovies.length;

      if (learMore > 0) {
        const newCards = filter.slice(
          showMovies.length,
          showMovies.length + showCards.load
        );
        setShowMovies([...showMovies, ...newCards]);
      }
    };

    useEffect(() => {
      Array.isArray(displayMovies) ? setFilter(displayMovies) : setFilter([]);
    }, [displayMovies]);

    useEffect(() => {
      if (windowSize > desktop.width) {
        setShowCards(desktop.cards);
      } else if (windowSize <= desktop.width && windowSize > mobile.width) {
        setShowCards(tablet.cards);
      } else {
        setShowCards(mobile.cards);
      }
    }, [desktop, mobile, tablet, windowSize]);

    useEffect(() => {
      if (filter.length) {
        setShowMovies(filter.filter((item, i) => i < showCards.total));
      }
    }, [filter, showCards.total]);


  return (
    <section className="movies-card-list">
      <div className="movies-card-list__list">
      {location.pathname === '/movies'
          ? showMovies.map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                savedMovie={getSavedMovies(savedMovies, movie)}
                onAddMovie={onAddMovie}
                onDeleteMovie={onDeleteMovie}
              />
            ))
          : displayMovies.map((movie) => (
              <MoviesCard
                key={movie._id}
                movie={movie}
                onDeleteMovie={onDeleteMovie}
              />
            ))}
      </div>
      {location.pathname === '/movies' && (
      <ShowMore
       setIndex={handleLoadMore}
       showMovies={showMovies}
       showCards={showCards}
       filter={filter}
      />
      )}
    </section>
  );
};

export default MoviesCardList;
