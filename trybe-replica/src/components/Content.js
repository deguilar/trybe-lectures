import React from 'react';
import Home from '../pages/Home';
import Contador from './Contador';
import { Route, Switch } from 'react-router-dom'
import Alunos from '../pages/Alunos';
import Projetos from '../pages/Projetos';
import Estudante from '../pages/Estudante';

function Content(props) {

  // console.log(props.nomes)
  const { nomes } = props

  //<Component idade={idade} />

  return (
    <main>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contador" component={Contador} />

        <Route path="/alunos/:alunoId" component={Estudante} />
        <Route path="/alunos" render={(props) => <Alunos {...props} nomes={nomes} idade={111} />} />

        <Route path="/projetos" component={Projetos} />

      </Switch>
    </main>
  );
}

export default Content;