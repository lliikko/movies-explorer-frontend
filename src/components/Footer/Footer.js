import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__container">
        <p className="footer__info">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <span className="footer__delimeter" />
        <div className="footer__bottom">
          <p className="footer__year">&copy; 2023</p>
          <ul className="footer__text">
            <li className="footer__item">
              <a
                className="footer__link"
                href="https://practicum.yandex.ru/"
                target="blank"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__item">
              <a
                className="footer__link"
                href="https://github.com/lliikko"
                target="blank"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
