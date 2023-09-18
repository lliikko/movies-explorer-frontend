import './Navigation.css';
import Menu from '../Menu/Menu';
import MenuMobile from '../MenuMobile/MenuMobile';
import { useState } from 'react';

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="navigation">
      <Menu active={menuActive} setActive={setMenuActive} />
      <MenuMobile menuActive={menuActive} setMenuActive={setMenuActive} />
    </nav>
  );
};

export default Navigation;
