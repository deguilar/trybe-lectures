import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

function Header() {
  return (
    <header className="trybe-header">
      <nav className="trybe-nav">
        <Link to='/'><img src="#" alt="Logo da Trybe" /></Link>
        <Link to='/solutions'>Gabaritos</Link>
        <Link to='/schedule'>Agenda</Link>
        <Link to='/trybe-content'>Conteúdo</Link>
        <Link to='/setup'>Setup inicial</Link>
      </nav>
    </header>
  );
}

export default Header;