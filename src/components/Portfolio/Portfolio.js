import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__nav">
        <li className="portfolio__nav-items">
          <a
            className="portfolio__nav-link"
            href="https://github.com/lliikko/how-to-learn"
            target="blank"
          >
            Статичный сайт
            <span className="portfolio__nav-icon">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__nav-items">
          <a
            className="portfolio__nav-link"
            href="https://github.com/lliikko/russian-travel"
            target="blank"
          >
            Адаптивный сайт
            <span className="portfolio__nav-icon">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__nav-items">
          <a
            className="portfolio__nav-link"
            href="https://github.com/lliikko/react-mesto-api-full-gha"
            target="blank"
          >
            Одностраничное приложение
            <span className="portfolio__nav-icon">&#8599;</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
