import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="not-found">
      <section className="not-found__container">
        <h2 className="not-found__type">404</h2>
        <p className="not-found__text">Страница не найдена</p>
        <button className="not-found__button" onClick={() => navigate(-1)}>
          Назад
        </button>
      </section>
    </main>
  );
};

export default NotFound;
