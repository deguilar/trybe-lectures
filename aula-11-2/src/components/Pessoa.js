import React from 'react'
import './Pessoa.css'
import FotoPerfil from './FotoPerfil'

function Pessoa(props) {
  console.log(props)

  return (
    <section className="pessoa">
      <p>Nome: {props.pessoa.nome}</p>
      <p>Idade: {props.pessoa.idade}</p>
      <p>Frase: {props.pessoa.frase}</p>

      <FotoPerfil foto={props.pessoa.foto} alt={"Imagem da pessoa"} />

    </section>
  )
}

export default Pessoa