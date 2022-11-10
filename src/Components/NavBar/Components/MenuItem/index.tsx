import { MenuItem } from './styles';

const MenuList = () => {
  return (
    <MenuItem>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/catalog">Catálogo</a>
        </li>
      </ul>
    </MenuItem>
  );
};

export default MenuList;
