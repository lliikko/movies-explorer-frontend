import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__info">
        <div className="about-project__container">
          <h3 className="about-project__text">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__container">
          <h3 className="about-project__text">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__progress">
        <p className="about-project__progress-item about-project__progress-item_back">
          1 неделя
        </p>
        <p className="about-project__progress-item about-project__progress-item_front">
          4 недели
        </p>
        <p className="about-project__progress-item about-project__progress-item_backend">
          Back-end
        </p>
        <p className="about-project__progress-item about-project__progress-item_frontend">
          Front-end
        </p>
      </div>
    </section>
  );
};

export default AboutProject;
