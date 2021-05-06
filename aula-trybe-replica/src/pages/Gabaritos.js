import React from 'react'
import { Link } from 'react-router-dom';

export default function Gabaritos(props) {

  const { gabaritos } = props;
  //console.log(props)

  return (
    <section>
      <h1>Gabaritos</h1>
      <ul>
        {gabaritos.map((gabarito) => (
          <li key={gabarito}>
            <Link to={`/gabaritos/${gabarito}`}>
              {gabarito}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
