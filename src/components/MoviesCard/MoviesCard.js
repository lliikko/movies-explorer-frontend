import { useLocation} from 'react-router-dom';
import { changeTime } from '../../utils/utils';
import { URL } from '../../utils/constans';
import './MoviesCard.css';

const MoviesCard = ({ movie, savedMovie, onAddMovie, onDeleteMovie }) => {

  const { beatfilmMovies } = URL;
  const location = useLocation();

  const handleLikeMovies = () => {
    onAddMovie(movie);
  };

  const handleUnlikeMovies = () => {
    onDeleteMovie(savedMovie);
  };

  const handleDeleteSavedMovie = () => {
    onDeleteMovie(movie);
  };

  return (
    <div className="movies-card">
      <a
        className="movies-card__trailer-link"
        href={movie.trailerLink}
        target="blank"
      >
        {location.pathname === '/movies' && (
          <img
            className="movies-card__image"
            alt={movie.nameRU}
            src={`${beatfilmMovies}${movie.image.url}`}
          />
        )}
        {location.pathname === '/saved-movies' && (
          <img
            className="movies-card__image"
            alt={movie.nameRU}
            src={movie.image}
          />
        )}
      </a>
      <div className="movies-card__bottom">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          <p className="movies-card__duration">{changeTime(movie.duration)}</p>
          {location.pathname === '/movies' &&(
        <button
          type="button"
          className={`movies-card__mark movies-card__mark_tag ${
            savedMovie ? 'movies-card__mark_active' : ''
          }`}
          onClick={savedMovie ? handleUnlikeMovies : handleLikeMovies}
        />
        )}
        {location.pathname === '/saved-movies' && (
          <button
            type="button"
            className="movies-card__mark movies-card__mark_cross"
            onClick={handleDeleteSavedMovie}
          />
        )}
      </div>
    </div>
  );
};

export default MoviesCard;
