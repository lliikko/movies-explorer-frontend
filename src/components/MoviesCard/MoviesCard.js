import { useState } from 'react';
import './MoviesCard.css';

const MoviesCard = ({ card, mark }) => {
  const [saveMovies, setSaveMovies] = useState(false);

  const handleSaveMovie = () => {
    if (!saveMovies && mark === 'tag') {
      return setSaveMovies(true);
    }
    return setSaveMovies(false);
  };

  return (
    <div className="movies-card">
      <img
        className="movies-card__image"
        alt={card.title}
        src={card.image}
      />
      <div className="movies-card__bottom">
          <h2 className="movies-card__title">{card.title}</h2>
          <p className="movies-card__duration">{card.duration}</p>
        <button
          type="button"
          className={`movies-card__mark movies-card__mark_${mark} movies-card__mark_${
            saveMovies ? 'active' : ''
          }`}
          onClick={handleSaveMovie}
        />
      </div>
    </div>
  );
};

export default MoviesCard;
