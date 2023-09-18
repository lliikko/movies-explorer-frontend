import './ShowMore.css';

const ShowMore = ({ setIndex, isVisible, isDisable }) => {
  return (
    isVisible && (
      <div className="show-more">
        <button
          className={`show-more__button ${
            isDisable ? 'show-more__button_disabled' : ''
          }`}
          type="submit"
          onClick={setIndex}
        >
          Ещё
        </button>
      </div>
    )
  );
};

export default ShowMore;
