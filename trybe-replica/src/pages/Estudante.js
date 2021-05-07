import React from 'react'

export default function Estudante(props) {

  console.log(props.match.params)


  return (
    <section>
      {props.match.params.alunoId}
    </section>
  )
}
