// src/components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
      <Link className="navbar-brand ms-3" to="/">MiTienda</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>

          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" id="productosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </Link>
            <ul className="dropdown-menu" aria-labelledby="productosDropdown">
              <li><Link className="dropdown-item" to="/category/hombre">Hombre</Link></li>
              <li><Link className="dropdown-item" to="/category/mujer">Mujer</Link></li>
              <li><Link className="dropdown-item" to="/category/niños">Niños y Niñas</Link></li>
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
