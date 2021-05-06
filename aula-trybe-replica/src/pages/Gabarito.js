import React from 'react'

export default function Gabaritos(props) {

  console.log(props)
  const { gabId } = props.match.params

  return (
    <section>
      <h1>Gabarito</h1>
      <p>{gabId}</p>
    </section>
  )
}
