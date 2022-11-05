import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/collapse.js'; //para menu hamburguer funcionar

const Navbar = () => {
  return (
    <nav className="nav-bar navbar-expand-md navbar-dark main-nav">
      <div>
        <a className="nav-logo-text " href="link">
          <h4>Carros Top</h4>
        </a>

        <button
          className="navbar-toggler button-sanduiche"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carrostop-navbar"
          aria-controls="carrostop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-primary"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="carrostop-navbar">
        <ul className="navbar-nav offset-md-2 main-menu">
          <li>
            <a href="link">Home</a>
          </li>
          <li>
            <a href="link">Catálogo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
