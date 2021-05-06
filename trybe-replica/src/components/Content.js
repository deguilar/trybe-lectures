import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Solutions from '../pages/Solutions';
import TrybeContent from '../pages/TrybeContent';
import Schedule from '../pages/Schedule';
import Setup from '../pages/Setup';

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