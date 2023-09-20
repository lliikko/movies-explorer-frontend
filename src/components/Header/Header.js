import './Header.css';
import Logo from '../Logo/Logo';
import AuthButtons from '../AuthButtons/AuthButtons';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {
  return (
    <header className={`header ${!loggedIn ? 'header_auth' : ''}`}>
      <section className="header__container">
        <Logo />
        {!loggedIn ? <AuthButtons /> : <Navigation />}
      </section>
    </header>
  );
};

export default Header;
