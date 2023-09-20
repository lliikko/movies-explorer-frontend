import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import ShowMore from '../ShowMore/ShowMore';
import { useEffect, useState } from 'react';
import { PAGE_COL } from '../../utils/cards';

const MoviesCardList = ({ cards, mark }) => {
  const [index, setIndex] = useState(0);
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    const numderOfIndex = PAGE_COL + index;
    const newArray = [];

    for (let i = 0; i < cards.length; i++) {
      if (i < numderOfIndex) {
        newArray.push(cards[i]);
      }
    }

    return setVisibleData(newArray);
  }, [cards, index]);

  const handleShowMore = () => {
    return setIndex(index + 4);
  };

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__list">
        {Array.isArray(visibleData)
          ? visibleData.map((item) => {
              return <MoviesCard key={item._id} card={item} mark={mark} />;
            })
          : null}
      </div>
      <ShowMore
        isVisible={cards.length > 16}
        isDisable={cards.length === visibleData.length}
        setIndex={handleShowMore}
      />
    </section>
  );
};

export default MoviesCardList;
