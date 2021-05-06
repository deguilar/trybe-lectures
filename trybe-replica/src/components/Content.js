import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Solutions from './Solutions';
import TrybeContent from './TrybeContent';
import Schedule from './Schedule';
import Setup from './Setup';

function Content() {
  const sampleData = ['12.1', '12.2', '12.3'];

  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/solutions/:solutionId" component={Solutions} />
        <Route
          path="/solutions"
          render={props => <Solutions {...props} availableSolutions={sampleData} />}
        />
        <Route path='/schedule' component={Schedule} />
        <Route path='/trybe-content' component={TrybeContent} />
        <Route path='/setup' component={Setup} />
      </Switch>
    </main>
  );
}

export default Content;