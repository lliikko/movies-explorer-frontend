import './AboutMe.css';
import avatar from '../../images/Avatar.png';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <address className="about-me__block">
          <h3 className="about-me__name">Анжелика</h3>
          <p className="about-me__info">
            Фронтенд-разработчик, 23 года
          </p>
          <p className="about-me__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis scelerisque fermentum dui faucibus in ornare. Fames ac turpis egestas sed. Egestas maecenas pharetra convallis posuere morbi leo urna. Eget nunc lobortis mattis aliquam faucibus. Tincidunt arcu non sodales neque. Dolor magna eget est lorem ipsum dolor sit amet.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/lliikko"
            target="blank"
          >
            Github
          </a>
        </address>
        <img
          className="about-me__avatar"
          src={avatar}
          alt="Аватар"
        />
      </div>
    </section>
  );
};

export default AboutMe;
