import { Container, Content, Menu } from './styles';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuItem from './Components/MenuItem';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
      <Container>
        <Content>
          <NavLink to="/">Cars Top</NavLink>
          <span>
            <FaBars
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            />
          </span>
          <MenuItem />
        </Content>
      </Container>

      {openMenu && (
        <Menu>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" activeClassName="active">
                Catálogo
              </NavLink>
            </li>
          </ul>
        </Menu>
      )}
    </>
  );
};

export default Navbar;
