import React from 'react'
import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {

  return (
    <header className="header">
      <nav>
        <Link to="/">Curso</Link>
        <Link to="/gabaritos">Gabaritos</Link>
        <Link to="/agenda">Agenda</Link>
        <Link to="/conteudo">Conteudo</Link>
        <Link to="/setup">Setup Inicial</Link>
      </nav>
    </header>
  )
}
