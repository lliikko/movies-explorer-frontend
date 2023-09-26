import './PopupInfo.css';


const PopupInfo = ({ isOpen, onClose, popupMessage }) => {
  return (
    <div
      className={`popup-info ${isOpen && 'popup-info_opened'}`}
      onClick={onClose}
    >
      <div
        className="popup-info__container"
        onClick={(evt) => evt.stopPropagation()}
      >
        <button className="popup-info__close" type="button" onClick={onClose} />
        <p className="popup-info__popup-text">
          {popupMessage}
        </p>
      </div>
    </div>
  )
}

export default PopupInfo
