import { Container, Menu } from './styles';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
      <Container>
        <a href="link">Cars Top</a>
        <FaBars
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
      </Container>

      {openMenu && (
        <Menu>
          <ul>
            <li>
              <a href="link">Home</a>
            </li>
            <li>
              <a href="link">Catálogo</a>
            </li>
          </ul>
        </Menu>
      )}
    </>
  );
};

export default Navbar;
