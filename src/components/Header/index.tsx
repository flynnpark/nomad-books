import Menu from './Menu';
import { MenuItems, Navigator } from './styled';

function Header() {
  return (
    <Navigator>
      <MenuItems>
        <Menu to="/">Home</Menu>
        <Menu to="/about">About</Menu>
      </MenuItems>
    </Navigator>
  );
}

export default Header;
