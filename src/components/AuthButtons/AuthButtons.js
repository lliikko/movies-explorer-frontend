import { Link } from 'react-router-dom';
import './AuthButtons.css';

const AuthButtons = () => {
  return (
    <nav className="auth-buttons">
      <Link className="auth-buttons__link auth-buttons__link_reg" to="/signup">
        Регистрация
      </Link>
      <Link className="auth-buttons__link auth-buttons__link_log" to="/signin">
        Войти
      </Link>
    </nav>
  );
};

export default AuthButtons;


