import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importamos el CSS

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/Clientes", label: "Clientes" },
    { to: "/Plan", label: "Plan" },
    { to: "/PrimerPlato", label: "Primer Plato" },
    { to: "/IslasPremiun", label: "Islas Premium" },
    { to: "/PlatoInfantil", label: "Plato Infantil" },
    { to: "/PlatoPrincipal", label: "Plato Principal" },
    { to: "/Postres", label: "Postres" },
    { to: "/MesaDulce", label: "Mesa Dulce" },
    { to: "/ExtrasLeciocion", label: "Extras" },
    { to: "/ShowElecion", label: "Show" },
    { to: "/FinDeFiesta", label: "Fin de Fiesta" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Menú del Evento</h1>
        <button className="hamburger" onClick={() => setOpen(!open)}>
          <span className={open ? "bar open" : "bar"}></span>
          <span className={open ? "bar open" : "bar"}></span>
          <span className={open ? "bar open" : "bar"}></span>
        </button>
        <ul className={`nav-links ${open ? "active" : ""}`}>
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;