import FotoPerfil from './FotoPerfil'

function Usuario(props) {
  const { foto } = props

  return (
    <FotoPerfil foto={foto} alt={"Imagem do Usuario"}/>
  )
}

export default Usuario