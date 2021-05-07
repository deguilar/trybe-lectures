import React from 'react';
// import logo from "../logo-trybe.svg"
import "./Header.css"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">

      {/* <button onClick>
      <Link>Voltar</Link>
    </button> */}

      <nav>
        <Link to="/" >Home</Link>
        <Link to="/contador" >Contador</Link>
        <Link to="/projetos" >Projetos</Link>
        <Link to="/alunos" >Alunos</Link>
      </nav>
    </header>
  );
}

export default Header;