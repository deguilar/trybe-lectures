import React from 'react'
import { Link } from 'react-router-dom'

export default function Alunos(props) {

  return (
    <section>


      <ul>
        {props.nomes.map(aluno => (
          <li key={aluno}>

            <Link to={`/alunos/${aluno}`}>
              {aluno}
            </Link>

          </li>
        ))}
      </ul>



    </section>
  )
}
