import React from 'react'
import Eventos from './components/Eventos'
import TituloDaPagina from './components/TituloDaPagina'

class App extends React.Component {
  render() {
    return (
      <main>
        <TituloDaPagina />
        <Eventos />
      </main>
    );
  }

}

export default App;
