import './MenuMobile.css';

const MenuMobile = ({ menuActive, setMenuActive }) => {
  return (
    <div className="menu-mob">
      <div
        className={`menu-mob__button ${
          menuActive ? 'menu-mob__button_active' : ''
        }`}
        onClick={() => setMenuActive(!menuActive)}
      >
        <span />
      </div>
    </div>
  );
};

export default MenuMobile;
