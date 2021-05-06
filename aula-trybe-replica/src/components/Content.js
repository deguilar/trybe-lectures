import React from 'react'
import { Route, Switch } from "react-router-dom"
import Gabaritos from "../pages/Gabaritos"
import Agenda from "../pages/Agenda"
import Conteudo from "../pages/Conteudo"
import Setup from "../pages/Setup"
import Home from "../pages/Home"
import Gabarito from "../pages/Gabarito"

export default function Content() {
  const data = ['12.1', '12.2', '12.3'];


  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gabaritos/:gabId" component={Gabarito} />
        <Route path="/gabaritos" render={(props) => <Gabaritos {...props} gabaritos={data} />} />
        <Route path="/agenda" component={Agenda} />
        <Route path="/conteudo" component={Conteudo} />
        <Route path="/setup" component={Setup} />
      </Switch>
    </main>
  )
}
