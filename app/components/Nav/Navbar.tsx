import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__title">Apartament STARS</div>
      <ul className="nav__list">
        <li>
          <a href="/">Oferta</a>
        </li>
        <li>
          <a href="/">Galeria</a>
        </li>
        <li>
          <a href="/">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
