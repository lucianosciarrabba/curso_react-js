import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
      <a className="navbar-brand ms-3" href="#">MiTienda</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">Inicio</a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="productosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul className="dropdown-menu" aria-labelledby="productosDropdown">
              <li><a className="dropdown-item" href="#">Categoría 1</a></li>
              <li><a className="dropdown-item" href="#">Categoría 2</a></li>
              <li><a className="dropdown-item" href="#">Categoría 3</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
